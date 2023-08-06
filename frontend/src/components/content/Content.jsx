import { useState, useEffect } from 'react'
import { getRecentlyGames } from '../../utils/getRecentlyGames'
import { useLocalStorage } from '../../utils/useLocalStorage'
import styles from './styles.module.css'

export const Content = () => {
  const [steamId, setSteamId] = useLocalStorage('steam_id', '')
  const [games, setGames] = useState([])
  const getApi = async () => {
		const data = await getRecentlyGames(steamId, 5)
		if (data.error) {
			setGames({
				error: data.error,
			})
		} else setGames(data.games)
	}

  useEffect(() => {
		if (Number(steamId)) {
			getApi()
		}
	}, [steamId])
  return (
    <div className={styles.content}>
      <h3 className={styles.title}>Недавние игры</h3>
      <div className={styles.games}>
        {games && games.map(game => (
          <div className={styles.card}>
             <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/hero_capsule.jpg`} alt={game.name} className={styles.card__image}/>
             <p className={styles.card__name}>{game.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
