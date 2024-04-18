import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { useAccount } from "wagmi"
import { useToast } from "./ui/use-toast"
import MintDialog from "./mint-dialog"
import React from "react"

type Image = {
	url: string
	prompt: string
}

interface ImageCardProps {
	image: Image
	isMintAvailable: boolean
}

const MintableCardContent = ({ image }: { image: Image }) => {
	const account = useAccount()
	const { toast } = useToast()

	const [isModalOpened, setIsModalOpened] = React.useState(false)

	const handleMintClick = () => {
		if (!account.isConnected) {
			toast({
				title: "Connect your wallet",
				description: "Please connect your wallet to mint this image.",
				duration: 1000,
			})
			return
		}
		setIsModalOpened(true)
	}

	return (
		<CardContent className="pt-6">
			<div className="relative w-72 h-96 group overflow-hidden cursor-default">
				<Image
					src={image.url}
					alt="mock"
					fill
					className="rounded-md"
					loading="lazy"
				/>
				<p className="text-xs text-center text-white/80 absolute bottom-0 w-full p-2 bg-black/50 group-hover:-bottom-12 transition-all duration-200">
					{image.prompt.substring(0, 93)}...
				</p>
				<Button
					className="h-12 absolute w-full group-hover:bottom-0 -bottom-12 transition-all duration-200 delay-400 bg-[#D1EF70]/80 hover:bg-[#D1EF70] text-black/80 hover:text-black"
					onClick={() => handleMintClick()}
				>
					Mint
				</Button>
				<MintDialog
					open={isModalOpened}
					setOpen={setIsModalOpened}
					metadata={{
						name: "",
						description: image.prompt,
						image: image.url,
					}}
				/>
			</div>
		</CardContent>
	)
}

const NonMintableCardContent = ({ image }: { image: Image }) => {
	return (
		<CardContent className="pt-6">
			<div className="relative w-72 h-96">
				<Image
					src={image.url}
					alt="mock"
					fill
					className="rounded-md"
					loading="lazy"
				/>
				<p className="text-xs text-center text-white/80 absolute bottom-0 w-full p-2 bg-black/50">
					{image.prompt.substring(0, 93)}...
				</p>
			</div>
		</CardContent>
	)
}

export default function ImageCard({ image, isMintAvailable }: ImageCardProps) {
	return (
		<Card className="border-none w-fit">
			{isMintAvailable ? (
				<MintableCardContent image={image} />
			) : (
				<NonMintableCardContent image={image} />
			)}
		</Card>
	)
}
