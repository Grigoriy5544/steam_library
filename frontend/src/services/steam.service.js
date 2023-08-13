import axios from 'axios'

class SteamService {
	#URL = process.env.REACT_APP_API_URL

	async getLibrary(steamId) {
		return axios.get(`${this.#URL}getLibrary?steamid=${steamId}`)
	}

	async getUserInfo(steam_id) {
		return axios.get(
			process.env.REACT_APP_API_URL + `getUserInfo?steamid=${steam_id}`
		)
	}

	async getRecentlyGames(steam_id, count = 0) {
		return axios.get(
			process.env.REACT_APP_API_URL +
				`getRecentlyPlayedGames?steamid=${steam_id}&count=${count}`
		)
	}
}

export default new SteamService()
