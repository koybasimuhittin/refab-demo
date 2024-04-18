export default function PageLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div className="py-20 h-full">{children}</div>
}
