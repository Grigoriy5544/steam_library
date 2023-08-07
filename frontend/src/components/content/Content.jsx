import { useState, useEffect } from 'react'
import { getRecentlyGames } from '../../utils/getRecentlyGames'
import { useLocalStorage } from '../../utils/useLocalStorage'
import styles from './styles.module.css'

const roundTime = time => {
  if (time >= 60) return `${(time / 60).toFixed(1)} ч.`
  if (time < 60) return `${time} мин.`
}

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
            <div className={styles.front}>
              <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/hero_capsule.jpg`} alt={game.name} className={styles.card__image}/>
            </div>
            <div className={styles.back}>
              <div className={styles.back__content}>
                <div className={styles.card__name}>{game.name}</div>
                <p className={styles.card__backTitle}>Вы играли</p>
                <p className={styles.card__text}>{roundTime(game.playtime_2weeks)} за последние две недели</p>
                <p className={styles.card__text}>{roundTime(game.playtime_forever)} всего</p>
              </div> 
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
