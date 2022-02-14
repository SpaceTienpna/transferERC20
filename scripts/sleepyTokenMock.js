// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Token = await hre.ethers.getContractFactory("SleepyTokenMock");
  const token = await Token.deploy();
  console.log("Deploying....");

  const instance = await token.deployed();
  await instance.mint("0x4dE5710694199ACe2252325cD3a341A790e18D94", 
  "10000000000000000000000000");
  console.log("Token deployed successfully at:", token.address);
  console.log("------------------- Information ------------------");
  console.log(token);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
