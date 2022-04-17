//const hre = require("hardhat");

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const patSwishContractFactory = await hre.ethers.getContractFactory("PatSwishPortal");
  const patSwishContract = await patSwishContractFactory.deploy();
  await patSwishContract.deployed();

  console.log("PatSwishPortal address: ", patSwishContract.address);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});