import { readContract } from "@wagmi/core"
import { LidyNFT, chain, wagmiConfig } from "@/config"
import ProfileClient from "./client"
import { ethers } from "ethers"

export default async function ProfilePage() {
	// if (!account.isConnected) {
	// 	return (
	// 		<div className="flex flex-col items-center justify-center h-full">
	// 			<h1 className="text-2xl font-bold">Connect Wallet</h1>
	// 			<p className="text-lg text-center">
	// 				Please connect your wallet to continue
	// 			</p>
	// 		</div>
	// 	)
	// } else if (account.chainId !== sepolia.id) {
	// 	return (
	// 		<div className="flex flex-col items-center justify-center h-full">
	// 			<h1 className="text-2xl font-bold">Wrong Network</h1>
	// 			<p className="text-lg text-center">
	// 				Please switch to the Sepolia network
	// 			</p>
	// 		</div>
	// 	)
	// }

	const provider = new ethers.JsonRpcProvider(chain.rpcUrls.default.http[0])

	const contract = new ethers.Contract(LidyNFT.address, LidyNFT.abi, provider)

	const currentSupply = await contract.currentSupply()

	console.log(currentSupply)

	const requests = []
	for (let i = 1; i <= currentSupply; i++) {
		requests.push(
			readContract(wagmiConfig, {
				abi: LidyNFT.abi,
				address: LidyNFT.address,
				functionName: "ownerOf",
				args: [i as unknown as bigint],
			})
		)
	}

	const owners = await Promise.all(requests)
	console.log(owners)

	return <ProfileClient owners={owners} />
}
