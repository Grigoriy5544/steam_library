import axios from 'axios'

export async function getRecentlyGames(steam_id, count = 0) {
	const { data } = await axios.get(
		process.env.REACT_APP_API_URL +
			`getRecentlyPlayedGames?steamid=${steam_id}&count=${count}`
	)
	return data
}
