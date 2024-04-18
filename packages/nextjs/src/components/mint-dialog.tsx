"use client"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import NFTCard from "./nft-card"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import LoadingSpinner from "./loading-spinner"
import { useToast } from "./ui/use-toast"
import { uploadMetadata } from "@/lib/pinata"
import { CheckCircledIcon } from "@radix-ui/react-icons"
import { useWriteContract } from "wagmi"
import { useAccount } from "wagmi"
import contracts from "../contracts/deployedContracts"
import { parseEther } from "viem"

type Metadata = {
	name: string
	description: string
	image: string
}

interface MintDialogProps {
	open: boolean
	setOpen: (open: boolean) => void
	metadata: Metadata
}

export default function MintDialog({
	open,
	setOpen,
	metadata,
}: MintDialogProps) {
	const [name, setName] = useState(metadata.name)
	const [loading, setLoading] = useState(false)

	const { toast } = useToast()

	const { writeContract, isPending } = useWriteContract()
	const account = useAccount()

	useEffect(() => {
		if (!isPending && loading) {
			toast({
				title: "NFT minted",
				description: (
					<div
						className="flex gap-2npx shadcn-ui@latest add skeleton
	"
					>
						<CheckCircledIcon /> Your NFT has been minted successfully!
					</div>
				),
			})
			setLoading(false)
			setOpen(false)
		}
	}, [isPending])

	const handleMintClick = () => {
		if (name.length === 0) {
			toast({
				title: "Invalid name",
				description: "Please provide a name for your NFT.",
			})
			return
		}
		setLoading(true)
		uploadMetadata({ ...metadata, name: name }).then((hash) => {
			writeContract({
				abi: contracts[11155111].LidyNFT.abi,
				address: contracts[11155111].LidyNFT.address,
				functionName: "publicMint",
				args: [hash],
				value: parseEther("0.03"),
			})
		})
	}

	return (
		<Dialog
			open={open}
			onOpenChange={(open) => {
				setOpen(open)
			}}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Mint this NFT</DialogTitle>
					<DialogDescription>
						<NFTCard metadata={metadata} name={name} setName={setName} />
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="px-6">
					<Button
						className="w-full h-8"
						onClick={() => {
							handleMintClick()
						}}
					>
						{loading ? (
							<div className="flex items-center justify-center gap-2">
								Minting <LoadingSpinner />
							</div>
						) : (
							"Mint"
						)}{" "}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
