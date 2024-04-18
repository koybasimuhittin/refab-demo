import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function Home() {
	return (
		<div className="flex items-center justify-center flex-col pt-12 md:gap-20 gap-6 h-screen">
			<div className="flex md:flex-row flex-col md:gap-20 gap-6">
				<div className="flex flex-col gap-6  justify-center">
					<div className="lg:text-6xl md:text-5xl text-4xl">
						Get inspired by <br />{" "}
						<p className="font-bold">AI-powered fashion</p> to design.
					</div>
					<span className="lg:text-lg md:text-sm text-gray-400">
						Meet your new fashion design tool! Envision, describe and design{" "}
						<br className="lg:block hidden" />
						with the magic of Refabric.
					</span>
				</div>
				<div className="relative md:w-[370px] aspect-square w-full h-full">
					<Image src="/hero.png" alt="hero" fill />
				</div>
			</div>
			<Button variant="default">
				<a
					href="/create"
					className="flex items-center justify-center gap-2 lg:w-fit w-full"
				>
					Launch App <ArrowRightIcon className="h-6 w-6" />
				</a>
			</Button>
		</div>
	)
}
