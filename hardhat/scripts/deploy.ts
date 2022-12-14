import { ethers } from "hardhat";
const fs = require("fs");

async function main() {

  const HoroscopeNFT = await ethers.getContractFactory("HoroscopeNFT");
  console.log("Deploying HoroscopeNFT...");
  const horoscopeNFT = await HoroscopeNFT.deploy();
  console.log("HoroscopeNFT deployed to:", horoscopeNFT.address);

  const horoscopeNFTData = {
    address: horoscopeNFT.address,
    abi: JSON.parse(horoscopeNFT.interface.format('json') as string)
  }

  fs.writeFileSync('../frontend/src/abi/horoscopeNFT.json', JSON.stringify(horoscopeNFTData));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
