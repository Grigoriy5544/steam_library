import axios from 'axios'

export async function getUserInfo(steam_id) {
	const { data } = await axios.get(
		process.env.REACT_APP_API_URL + `getUserInfo?steamid=${steam_id}`
	)
	return data
}
