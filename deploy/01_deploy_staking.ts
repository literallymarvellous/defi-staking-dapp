import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, get, log } = deployments;

  const { deployer, tokenOwner } = await getNamedAccounts();

  const dappToken = await get("DappToken");
  const dappTokenAddress = dappToken.address;

  const stakingContract = await deploy("Staking", {
    from: deployer,
    args: [dappTokenAddress],
    log: true,
  });

  const Staking = await ethers.getContractFactory("Staking");
  const accounts = await hre.ethers.getSigners();
  const signer = accounts[0];
  const staking = new ethers.Contract(
    stakingContract.address,
    Staking.interface,
    signer
  );
  const owner = await staking.owner();
  console.log("staking address", staking.address);
  console.log("staking onwer", owner);
};
export default func;
func.tags = ["stake", "all"];
