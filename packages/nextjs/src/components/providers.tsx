"use client"

import "@rainbow-me/rainbowkit/styles.css"
import {
	darkTheme,
	getDefaultConfig,
	RainbowKitProvider,
} from "@rainbow-me/rainbowkit"
import { WagmiProvider } from "wagmi"
import { hardhat, sepolia } from "wagmi/chains"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import Header from "./header"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"

export const config = getDefaultConfig({
	appName: "My RainbowKit App",
	projectId: "YOUR_PROJECT_ID",
	chains: [hardhat, sepolia],
	ssr: true, // If your dApp uses server side rendering (SSR)
})

const queryClient = new QueryClient()

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider
					theme={darkTheme({
						accentColor: "#D1EF70",
						accentColorForeground: "black",
						borderRadius: "medium",
						fontStack: "system",
						overlayBlur: "small",
					})}
				>
					<TooltipProvider>
						<div className="min-h-screen relative">
							<Header />
							<div className="flex items-center justify-center h-full w-full absolute">
								<div className="md:px-12 px-4 w-full h-full">{children}</div>
							</div>
							<Toaster />
						</div>
					</TooltipProvider>
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	)
}

export default Providers
