import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, get, log } = deployments;

  const { deployer, tokenOwner } = await getNamedAccounts();

  // get deployed token
  const dappToken = await get("DappToken");
  const dappTokenAddress = dappToken.address;

  // deploy staking contract
  const stakingContract = await deploy("Staking", {
    from: deployer,
    args: [dappTokenAddress],
    log: true,
  });

  // get staking contract instance
  const Staking = await ethers.getContractFactory("Staking");
  const accounts = await hre.ethers.getSigners();
  const signer = accounts[0];
  const staking = new ethers.Contract(
    stakingContract.address,
    Staking.interface,
    signer
  );

  // get token instance
  const Token = await ethers.getContractFactory("DappToken");
  const tokenSigner = await ethers.getSigner(tokenOwner);
  const token = new ethers.Contract(
    dappToken.address,
    Token.interface,
    tokenSigner
  );

  // transfer token to use a reward token
  let tx = await token.transfer(stakingContract.address, token.totalSupply());
  let txReceipt = await tx.wait();

  const owner = await staking.owner();
  console.log("staking address", staking.address);
  console.log("staking onwer", owner);

  // check dapptoken balance of staking contract
  let stakingBalance = await token.balanceOf(staking.address);
  console.log(stakingBalance.toString());

  // add erc20 tokens dapp-token, weth_token, faucet token
};
export default func;
func.tags = ["stake", "all"];
