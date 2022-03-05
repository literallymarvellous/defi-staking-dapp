import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log } = deployments;

  const { deployer, tokenOwner } = await getNamedAccounts();

  const dappToken = await deploy("DappToken", {
    from: deployer,
    args: [tokenOwner],
    log: true,
  });

  const Token = await ethers.getContractFactory("DappToken");
  const accounts = await hre.ethers.getSigners();
  const signer = accounts[0];
  const token = new ethers.Contract(dappToken.address, Token.interface, signer);
  const owner = await token.owner();
  console.log("token address", token.address);
  console.log("token onwer", owner);
};
export default func;
func.tags = ["token", "all"];
