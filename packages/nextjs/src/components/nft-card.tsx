import { Card, CardContent, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import { Input } from "./ui/input"
import { useState } from "react"

type Metadata = {
	name: string
	description: string
	image: string
}

interface NFTCardProps {
	metadata: Metadata
	name?: string
	setName: (name: string) => void
}

export default function NFTCard({ metadata, name, setName }: NFTCardProps) {
	return (
		<Card className="border-none mt-4">
			<CardContent className="flex flex-col gap-2 items-center justify-center">
				<Image
					src={metadata.image}
					alt="mock"
					width={200}
					height={200}
					className="rounded-md"
					loading="lazy"
				/>
				<CardDescription className="flex flex-col gap-2">
					<span className="text-white text-md">
						Description
						<p className="text-sm text-muted-foreground mt-1">
							{metadata.description}
						</p>
					</span>
					<span className="text-white text-md">
						Name:
						{metadata.name ? (
							<p className="text-sm text-muted-foreground">{metadata.name}</p>
						) : (
							<Input
								placeholder="Give a name to your nft"
								className="mt-1"
								onChange={(e) => {
									setName(e.target.value)
								}}
							/>
						)}
					</span>
				</CardDescription>
			</CardContent>
		</Card>
	)
}
