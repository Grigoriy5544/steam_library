import React from 'react'
import styles from './style.module.css'

const runGame = appid => {
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {
      window.open(`steam://rungame/${appid}/76561202255233023/`, '_blank')
    }
}

export const Games = ({games}) => {
  return ((
      <div className={styles.games}>
      {games ? games.map(game => (
        <div key={game.appid} className={styles.card} 
        onClick={() => runGame(game.appid)}>
          <img src={`https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`} alt={game.name} className={styles.image}/>
          <p key={game.appid} className={styles.name}>{game.name}</p>
          {/* <p className={styles.text}> Сыграно {Math.round(game.playtime_forever / 60)} ч.</p> */}
        </div>
      )) : <p className={styles.name}>У вас нет игр</p>}
    </div>
  ))
}
