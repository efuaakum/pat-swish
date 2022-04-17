async function main() {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const PatSwishContractFactory = await hre.ethers.getContractFactory("PatSwishPortal");
  const patSwishContract = await PatSwishContractFactory.deploy();

  await patSwishContract.deployed();

  console.log("Contract deployed to:", patSwishContract.address);
  console.log("Contract deployed by:", owner.address);

  let swishCount;
  swishCount = await patSwishContract.getTotalSwishes();

  let swishTxn = await patSwishContract.swish();
  await swishTxn.wait();

  swishCount = await patSwishContract.getTotalSwishes();

  swishTxn = await patSwishContract.connect(randomPerson).swish();
  await swishTxn.wait();

  swishCount = await patSwishContract.getTotalSwishes();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
