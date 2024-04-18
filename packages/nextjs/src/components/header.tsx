import { cn } from "@/lib/utils"
import Image from "next/image"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"

import { ConnectButton } from "@rainbow-me/rainbowkit"

export const Logo = ({ className }: { className?: string }) => {
	return (
		<div className={cn(className, "relative")}>
			<a href="/">
				<Image
					src="/logo.png"
					alt="logo.png"
					fill
					className={cn(className, "invert")}
				/>
			</a>
		</div>
	)
}

export const NavigationItems = [
	{
		title: "Create",
		icon: null,
		href: "/",
	},
	{
		title: "Explore",
		icon: null,
		href: "/explore",
	},
]

export default function Header() {
	return (
		<div className="flex flex-row justify-center items-center border-b">
			<div className="flex flex-row justify-between items-center max-w-7xl md:px-12 px-4 py-4 w-full">
				<div className="flex flex-row gap-4 items-start justify-end">
					<Logo className="w-36 h-6 top-1" />
					<NavigationMenu>
						<NavigationMenuList>
							{NavigationItems.map((item) => (
								<NavigationMenuItem key={item.title}>
									<Link href={item.href} legacyBehavior passHref>
										<NavigationMenuLink
											className={cn(
												navigationMenuTriggerStyle(),
												"text-md text-gray-400 bg-black tracking-widest"
											)}
										>
											{item.icon}
											<span>{item.title}</span>
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<ConnectButton
					accountStatus={{
						smallScreen: "avatar",
						largeScreen: "full",
					}}
				/>
			</div>
		</div>
	)
}
