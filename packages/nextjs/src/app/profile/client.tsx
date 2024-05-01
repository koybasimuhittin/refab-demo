"use client"

import { chain } from "@/config"
import { useAccount } from "wagmi"
import { useState } from "react"
import NFTCard from "./nft-card"

export default function ProfileClient({
	owners,
}: Readonly<{
	owners: string[]
}>) {
	const account = useAccount()

	const filteredTokens = owners
		.map((owner, index) => {
			return {
				owner: owner,
				id: index + 1,
			}
		})
		.filter((token) => token.owner === account.address)

	const [tokens, setTokens] = useState<any>(filteredTokens.slice(0, 5))

	if (!account.isConnected) {
		return (
			<div className="flex flex-col items-center justify-center h-full">
				<h1 className="text-2xl font-bold">Connect Wallet</h1>
				<p className="text-lg text-center">
					Please connect your to see your refabric tokens
				</p>
			</div>
		)
	}

	if (account.chainId !== chain.id) {
		return (
			<div className="flex flex-col items-center justify-center h-full">
				<h1 className="text-2xl font-bold">Wrong Network !!!</h1>
				<p className="text-lg text-center">
					Please switch to the {chain.name.toLocaleUpperCase()} network
				</p>
			</div>
		)
	}

	return (
		<div className="grid  2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-end content-center gap-8 mt-12 max-w-screen-2xl m-auto pb-20">
			{filteredTokens.map((token: any, index) => {
				return <NFTCard key={index} id={token.id} />
			})}
		</div>
	)
}
