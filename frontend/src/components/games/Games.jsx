import React from 'react'
import styles from './style.module.css'

export const Games = ({games}) => {
  return ((
      <div className={styles.games}>
      {games ? games.map((game, key) => (
        <div key={game.appid} className={styles.card} 
        onClick={() => window.open(`steam://rungame/${game.appid}/76561202255233023/`, '_blank')}>
          <img src={`https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`} alt={game.name} className={styles.image}/>
          <p key={game.appid} className={styles.name}>{game.name}</p>
          {/* <p className={styles.text}> Сыграно {Math.round(game.playtime_forever / 60)} ч.</p> */}
        </div>
      )) : <p className={styles.name}>У вас нет игр</p>}
    </div>
  ))
}
