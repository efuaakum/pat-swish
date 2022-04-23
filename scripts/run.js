async function main() {
  const PatSwishContractFactory = await hre.ethers.getContractFactory("PatSwishPortal");
  const patSwishContract = await PatSwishContractFactory.deploy();
  await patSwishContract.deployed();

  console.log("Contract change 2 deployed to:", patSwishContract.address);

  let swishCount;
  swishCount = await patSwishContract.getTotalSwishes();
  console.log(swishCount.toNumber());

  let swishTxn = await patSwishContract.swish("Our first message!");
  await swishTxn.wait();

  const [_, randomPerson] = await hre.ethers.getSigners();
  swishTxn = await patSwishContract.connect(randomPerson).swish("Our second message!");
  await swishTxn.wait();

  let allSwishes = await patSwishContract.getAllSwishes();
  console.log(allSwishes);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
