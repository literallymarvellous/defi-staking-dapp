// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import "./ExampleExternalContract.sol";

/// @title A staking contract
/// @author The name of the author
/// @notice A contract that allows you yo stakie ETH
contract Staker {
    // External contract that will old stacked funds
    ExampleExternalContract public exampleExternalContract;

    // Balances of the user's staked funds
    mapping(address => uint256) public balances;

    // Staking threshold
    uint256 public constant THRESHOLD = 1 ether;

    // Staking deadline
    uint256 public deadline = block.timestamp + 30 seconds;

    // Events
    event Stake(address indexed sender, uint256 amount);

    // Modifiers

    /// @notice Modifier that require the deadline to be reached or not
    /// @param required Check if the deadlin ehas reached or not
    modifier deadlineReached(bool required) {
        uint256 timeRemaining = timeLeft();
        if (required) {
            require(timeRemaining == 0, "Deadline is not reached yet");
        } else {
            require(timeRemaining > 0, "Deadline is already reached");
        }
        _;
    }

    /// @notice Modifier that require the external contract to not be completed
    modifier stakeNotCompleted() {
        bool completed = exampleExternalContract.completed();
        require(!completed, "staking process already completed");
        _;
    }

    receive() external payable {
        stake();
    }

    constructor(address exampleExternalContractAddress) {
        exampleExternalContract = ExampleExternalContract(
            exampleExternalContractAddress
        );
    }

    /// @notice stake method that updates the user's balance
    function stake() public payable deadlineReached(false) stakeNotCompleted {
        balances[msg.sender] += msg.value;

        emit Stake(msg.sender, msg.value);
    }

    function execute() public stakeNotCompleted deadlineReached(false) {
        uint256 contractBalance = address(this).balance;

        // check the contract has enough ETH to reach the treshold
        require(contractBalance >= THRESHOLD, "Below Threshold");

        (bool sent, ) = address(exampleExternalContract).call{
            value: contractBalance
        }(abi.encodeWithSignature("complete()"));
        require(sent, "execute call failed");
    }

    function withdraw() public deadlineReached(true) stakeNotCompleted {
        uint256 userBalance = balances[msg.sender];

        // check if the user has balance to withdraw
        require(userBalance > 0, "No balance to withdraw");

        // reset the balance of the user
        balances[msg.sender] = 0;

        // Transfer balance back to the user
        (bool sent, ) = msg.sender.call{value: userBalance}("");
        require(sent, "Failed to withdraw");
    }

    function timeLeft() public view returns (uint256) {
        if (block.timestamp >= deadline) {
            return 0;
        } else {
            return deadline - block.timestamp;
        }
    }
}
