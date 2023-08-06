import axios from 'axios'

export async function getLibrary(steam_id) {
	const { data } = await axios.get(
		process.env.REACT_APP_API_URL + `getLibrary?steamid=${steam_id}`
	)
	return data
}
