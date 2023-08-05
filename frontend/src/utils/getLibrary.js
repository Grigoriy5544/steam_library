export async function getLibrary(steam_id) {
	const data = await fetch(
		`http://localhost:5000/api/getLibrary?steam_id=${steam_id}`,
		{
			mode: 'cors',
		}
	)
	const res = await data.json()
	return res
}
