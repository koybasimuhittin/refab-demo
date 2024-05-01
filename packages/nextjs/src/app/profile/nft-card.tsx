import { useReadContract } from "wagmi"
import { LidyNFT } from "@/config"
import { useEffect, useState } from "react"
import { fetchMetadata, ipfsUrlToHash } from "@/lib/pinata"
import NFTCardComponent from "@/components/nft-card"
import LoadingSpinner from "@/components/loading-spinner"

export default function NFTCard({ id }: Readonly<{ id: number }>) {
	const [metadata, setMetadata] = useState<any>(null)
	const [metaDataState, setMetaDataState] = useState<
		"loading" | "error" | "success"
	>("loading")

	const {
		data: tokenURI,
		error,
		isLoading,
	} = useReadContract({
		abi: LidyNFT.abi,
		address: LidyNFT.address,
		functionName: "tokenURI",
		args: [id as unknown as bigint],
	})

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchMetadata(ipfsUrlToHash(tokenURI as string))
				setMetadata(response)
				setMetaDataState("success")
			} catch (error) {
				setMetaDataState("error")
			}
		}
		if (tokenURI) {
			fetchData()
		}
	}, [tokenURI])

	if (error || metaDataState == "error")
		return (
			<div className="h-[448px] w-full bg-background rounded-xl flex flex-col gap-4 items-center justify-center text-red-100 text-4xl font-bold tracking-wider">
				Error!
				<p className="text-sm tracking-normal font-normal">
					Failed to fetch metadata
				</p>
			</div>
		)

	return (
		<>
			{metadata && (
				<NFTCardComponent metadata={metadata} name={metadata.name} />
			)}
		</>
	)
}
