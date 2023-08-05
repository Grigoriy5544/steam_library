import axios from 'axios'

export async function getUserInfo(steam_id) {
	const { data } = await axios.get(
		process.env.REACT_APP_API_URL + `getUserInfo?steam_id=${steam_id}`
	)
	return data
}
