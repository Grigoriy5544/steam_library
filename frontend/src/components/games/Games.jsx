import { useEffect, useState } from 'react'
import styles from './style.module.css'
import { runGame } from '../../utils/runGame'
import { useLibrary } from '../../hooks/useLibrary'
import { useLocalStorage } from '../../utils/useLocalStorage'

export const Games = () => {
  const [steamId, setSteamId] = useLocalStorage('steam_id', '')
  const { isLoading, data: library, isSuccess } = useLibrary(steamId)
  const [games, setGames] = useState([])
  useEffect(() => {
    if (isSuccess) setGames(library.games)
  }, [isLoading])


  return ((
    <div className={styles.games}>
      {games ? games.map(game => (
        <div key={game.appid} className={styles.card} 
        onClick={() => runGame(game.appid)}>
          <img src={`https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`} alt={game.name} className={styles.image}/>
          <p key={game.appid} className={styles.name}>{game.name}</p>
        </div>
      )) : <p className={styles.name}>У вас нет игр</p>}
    </div>
  ))
}
