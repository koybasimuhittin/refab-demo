import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployLidyNFTContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("LidyNFT", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const nft = await hre.ethers.getContract<Contract>("LidyNFT", deployer);
  try {
    const tx = await nft.setPublicMintable(true);
    await tx.wait();
    console.log("NFT contract is now public mintable");
  } catch (e) {
    console.error("Error setting NFT contract to public mintable:", e);
  }
};

export default deployLidyNFTContract;

deployLidyNFTContract.tags = ["LidyNFT"];
