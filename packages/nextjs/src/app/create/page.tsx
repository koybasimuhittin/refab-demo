"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ImageCard from "@/components/image-card"
import LoadingSpinner from "@/components/loading-spinner"
import { create, get } from "@/lib/refabric"
import { useToast } from "@/components/ui/use-toast"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

type Image = {
	url: string
	prompt: string
}

type Images = {
	items: Image[]
	prmopt: string
	isLoading: boolean
}

const MockImages = () => {
	const images: Image[] = [
		{
			prompt:
				"fashion design inspired by the vibrant patterns of Vincent van Gogh's Starry Night, high fashion posing, intricate details, fashion, luxury runway",
			url: "https://s3.amazonaws.com/cdn.refabric.com/post_temp/835901048_8f32df4a-5fe1-46b0-ab4e-c72fa9cf9c3e_1.png",
		},

		{
			prompt:
				"a woman walks down the runway in an attractive pink and black dress, in the style of neoism, voluminous forms, alexander mcqueen, gorgeous colors, flowing forms, emerson silva, curvilinear",
			url: "https://s3.amazonaws.com/cdn.refabric.com/post_temp/735474189_fe238fd9-0dbd-4bd4-b375-50a490b7e899_2.png",
		},
	]
	return (
		<>
			<div className="lg:grid hidden grid-cols-2 place-content-center justify-items-center gap-x-20 gap-y-10">
				<ImageCard image={images[0]} isMintAvailable={false} />
				<ImageCard image={images[1]} isMintAvailable={false} />
			</div>
			<div className="grid lg:hidden grid-cols-1 place-content-center justify-items-center gap-x-20 gap-y-10">
				<ImageCard image={images[0]} isMintAvailable={false} />
			</div>
		</>
	)
}

const Images = ({
	images,
	isMintAvailable,
}: {
	images: Image[]
	isMintAvailable: boolean
}) => {
	return (
		<>
			<div className="lg:grid hidden grid-cols-2 place-content-center justify-items-center gap-x-20 gap-y-10">
				{images.map((image, index) => (
					<ImageCard
						key={index}
						image={image}
						isMintAvailable={isMintAvailable}
					/>
				))}
			</div>
			<div className="grid lg:hidden grid-cols-1 place-content-center justify-items-center gap-x-20 gap-y-10">
				{images.map((image, index) => (
					<ImageCard
						key={index}
						image={image}
						isMintAvailable={isMintAvailable}
					/>
				))}
			</div>
		</>
	)
}

export default function Page() {
	const { toast } = useToast()

	const [images, setImages] = useState<Images>({
		items: [],
		isLoading: false,
		prmopt: "",
	})

	const handleGenerateClick = () => {
		if (images.prmopt.length === 0) {
			toast({
				variant: "destructive",
				title: "Invalid prompt",
				description: (
					<div
						className="flex gap-2npx shadcn-ui@latest add skeleton
"
					>
						<ExclamationTriangleIcon /> Please enter a non empty prompt
					</div>
				),
				duration: 3000,
			})
			return
		}
		setImages({
			...images,
			isLoading: true,
		})

		create(images.prmopt).then((res) => {
			const interval = setInterval(() => {
				get(res.responseData.created_id).then((res) => {
					if (res.responseData[0].status == 1) {
						setImages({
							...images,
							items: res.responseData[0].images.map((url: any) => {
								return {
									url,
									prompt: images.prmopt,
								}
							}),
							isLoading: false,
						})
						clearInterval(interval)
					}
				})
			}, 10000)
		})
	}

	return (
		<div className="w-full flex flex-col items-center justify-center gap-2 pb-20">
			<div className="w-fit p-20">
				{images.items.length > 0 ? (
					<Images images={images.items} isMintAvailable={true} />
				) : (
					<MockImages />
				)}
			</div>

			<div className="grid grid-flow-row md:w-1/2 w-full gap-4">
				<Input
					placeholder="Oversized light blue quilted puffer jacket, high collar, symmetrical padding, blond scandinavian man"
					className="w-full bg-[#2B2B2B] h-12"
					onChange={(e) => {
						setImages({
							...images,
							prmopt: e.target.value,
						})
					}}
					disabled={images.isLoading}
				/>
				<div className="flex flex-row items-center justify-center ">
					<Button
						variant="default"
						onClick={() => handleGenerateClick()}
						className="h-8 w-1/2"
						disabled={images.isLoading}
					>
						{images.isLoading ? (
							<div className="flex items-center justify-center gap-2">
								Generating <LoadingSpinner />
							</div>
						) : (
							"Generate"
						)}
					</Button>
				</div>
			</div>
		</div>
	)
}
