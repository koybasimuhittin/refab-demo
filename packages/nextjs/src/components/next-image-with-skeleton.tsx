import { useState } from "react"
import { Skeleton } from "./ui/skeleton"
import Image from "next/image"

export default function ImageWithSkeleton({
	props,
}: Readonly<{
	props: {
		src: string
		alt: string
		width?: number
		height?: number
		blurDataURL: string
		fill?: boolean
	}
}>) {
	const [loaded, setLoaded] = useState(false)
	return (
		<div className="relative">
			<Image
				{...props}
				className={`${!loaded ? "opacity-0" : "opacity-100"}}`}
				onLoadingComplete={() => setLoaded(true)}
			/>
			{!loaded && <Skeleton />}
		</div>
	)
}
