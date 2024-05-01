import LoadingSpinner from "@/components/loading-spinner"
import { Suspense } from "react"

export default function PageLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="py-20 h-full">
			<Suspense
				fallback={
					<div className="w-full h-full overflow-hidden flex items-center justify-center">
						<div className=" flex items-center justify-center md:scale-[10] scale-[5] ">
							<LoadingSpinner />
						</div>
					</div>
				}
			>
				{children}
			</Suspense>
		</div>
	)
}
