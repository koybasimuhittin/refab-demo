const jwt = process.env.NEXT_PUBLIC_PINATA_JWT
const gateway = process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL

export const uploadMetadata = async ({
	image,
	description,
	name,
}: {
	image: string
	description: string
	name: string
}) => {
	const metadata = {
		name,
		description,
		image,
	}

	const options = {
		method: "POST",
		headers: {
			Authorization: `Bearer ${jwt}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			pinataContent: metadata,
			pinataMetadata: { name: `${name}.json` },
		}),
	}

	const res = await (
		await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", options)
	).json()

	return res.IpfsHash
}

export const ipfsUrlToHash = (url: string): string => {
	return url.split("/").pop() as string
}

export const fetchMetadata = async (ipfsHash: string) => {
	const res = await fetch(`${gateway}${ipfsHash}`)
	return res.json()
}
