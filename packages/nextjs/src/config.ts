import { sepolia } from "viem/chains"
import deployedContracts from "./contracts/deployedContracts"
import { createConfig, http } from "wagmi"

export const chain = sepolia
export const LidyNFT = deployedContracts[chain.id].LidyNFT

export const wagmiConfig = createConfig({
	chains: [sepolia],
	transports: {
		[sepolia.id]: http(),
	},
})
