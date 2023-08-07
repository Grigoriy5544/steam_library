import React from 'react'
import styles from './style.module.css'
import { runGame } from '../../utils/runGame'

export const Games = ({games}) => {
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
