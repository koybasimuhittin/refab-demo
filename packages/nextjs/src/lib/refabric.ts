const url = process.env.NEXT_PUBLIC_REFABRIC_API_URL!
const bearerToken = process.env.NEXT_PUBLIC_REFABRIC_API_BEARER_TOKEN!

export async function create(prompt: string) {
	const response = await fetch(`${url}/v1/designs/create`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${bearerToken}`,
		},
		method: "POST",
		body: JSON.stringify({
			prompt: prompt,
			negative_prompt: "",
			dimension: "512_768",
		}),
	})

	return response.json()
}

export async function get(id: string) {
	const response = await fetch(`${url}/v1/designs/status/${id}`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${bearerToken}`,
		},
	})

	return response.json()
}
