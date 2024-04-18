const jwt = process.env.NEXT_PUBLIC_PINATA_JWT

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
