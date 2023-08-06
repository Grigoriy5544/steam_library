const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(
	cors({
		origin: '*',
	})
)

app.get('/api/getLibrary', async (req, res) => {
	res.set('Access-Control-Allow-Origin', '*')
	async function getLibrary() {
		try {
			const data = await fetch(
				`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${process.env.STEAM_API_KEY}&steamid=${req.query.steamid}&include_appinfo=true`
			)
			const status_code = data.status
			if (status_code !== 200) {
				return {
					error: status_code,
				}
			}
			const res = await data.json()
			if (res.response) return res.response
		} catch (error) {
			return {
				error: error,
			}
		}
	}
	const library = await getLibrary()

	res.send(library)
})

app.get('/api/getUserInfo', async (req, res) => {
	res.set('Access-Control-Allow-Origin', '*')
	async function getUserInfo() {
		try {
			const data = await fetch(
				`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${req.query.steamid}&include_appinfo=true`
			)
			const lvl = await fetch(
				`https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=${process.env.STEAM_API_KEY}&steamid=${req.query.steamid}&include_appinfo=true`
			)
			const status_code = data.status
			const status_codeLvl = lvl.status
			if (status_code !== 200 || status_codeLvl !== 200) {
				return {
					error: {
						userInfo: status_code,
						userLvl: status_codeLvl,
					},
				}
			}
			const res = await data.json()
			const resLvl = await lvl.json()
			return { ...res.response.players[0], ...resLvl.response }
		} catch (error) {
			return {
				error: error,
			}
		}
	}
	const userInfo = await getUserInfo()

	res.send(userInfo)
})

app.get('/api/getRecentlyPlayedGames', async (req, res) => {
	res.set('Access-Control-Allow-Origin', '*')

	async function getRecentlyPlayedGames() {
		try {
			const data = await fetch(
				`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${
					process.env.STEAM_API_KEY
				}&steamid=${req.query.steamid}&count=${req.query.count || 0}`
			)
			const status_code = data.status
			if (status_code !== 200) {
				return {
					error: status_code,
				}
			}
			const res = await data.json()
			if (res.response) return res.response
		} catch (error) {
			return {
				error: error,
			}
		}
	}
	const games = await getRecentlyPlayedGames()

	res.send(games)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log('server started on port:', PORT)
})
