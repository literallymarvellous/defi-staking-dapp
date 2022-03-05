// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DappToken is ERC20 {
    address public owner;

    constructor(address _owner) ERC20("Dapp Token", "DAPP") {
        _mint(_owner, 1000 * 10**18);
        owner = _owner;
    }
}
