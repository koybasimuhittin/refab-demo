import { Card, CardContent, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import { Input } from "./ui/input"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip"

type Metadata = {
	name: string
	description: string
	image: string
}

interface NFTCardProps {
	metadata: Metadata
	name?: string
	setName?: (name: string) => void
}

export default function NFTCard({ metadata, name, setName }: NFTCardProps) {
	return (
		<Card className="border-none mt-4 pt-6 h-full">
			<CardContent className="flex flex-col gap-4 items-center justify-start h-full">
				<div className="h-[200px] w-[200px] flex items-center justify-center relative">
					<Image
						src={metadata.image}
						alt="NFT Image"
						fill
						className="rounded-md"
						loading="lazy"
					/>
				</div>
				<CardDescription className="flex flex-col gap-1">
					<Tooltip>
						<TooltipTrigger className="items-start text-left">
							<span className="text-white text-md">
								Description
								<p className="text-sm text-muted-foreground mt-1">
									{metadata.description.slice(0, 93)}
									{metadata.description.length > 93 ? "..." : ""}
								</p>
							</span>
						</TooltipTrigger>
						<TooltipContent className="max-w-72">
							<p className="text-sm text-muted-foreground mt-1 text-wrap">
								{metadata.description}
							</p>
						</TooltipContent>
					</Tooltip>
					<span className="text-white text-md">
						Name
						{metadata.name ? (
							<p className="text-sm text-muted-foreground">{metadata.name}</p>
						) : (
							<Input
								placeholder="Give a name to your nft"
								className="mt-1"
								onChange={(e) => {
									setName && setName(e.target.value)
								}}
							/>
						)}
					</span>
				</CardDescription>
			</CardContent>
		</Card>
	)
}
