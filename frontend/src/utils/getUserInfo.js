export async function getUserInfo(steam_id) {
	const data = await fetch(
		`http://localhost:5000/api/getUserInfo?steam_id=${steam_id}`,
		{
			mode: 'cors',
		}
	)
	const res = await data.json()
	return res
}
