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

const config = getDefaultConfig({
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
					<Header />
					<div className="flex items-center justify-center">
						<div className="md:px-12 px-4  max-w-7xl">{children}</div>
					</div>
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	)
}

export default Providers
