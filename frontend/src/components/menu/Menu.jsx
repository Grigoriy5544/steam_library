import React from 'react'
import { Games } from '../games/Games'
import styles from "./menu.module.css"
import { useLocalStorage } from '../../utils/useLocalStorage'
import { Header } from '../header/Header'

export const Menu = ({library}) => {
  const [steamId, setSteamId] = useLocalStorage('steam_id', '')
  return (
    <>
    {!library.error ? 
      <div className={styles.Menu}>
        <Header/>
        <Games games={library.games} className={styles.sidebar}/>
        <div className={styles.content}>Steam Library copy</div>
      </div>
     : (
      <div className={styles.error}>
        <h3 className={styles.title}>Ошибка: {library.error}</h3>
        <p>Возможно мы указали неверный steam id, попробуйте перезайти</p>
        <button className={styles.button} onClick={() => {
          setSteamId('')
          window.location.reload()
        }}>Войти</button>
      </div>
    )}  
    </>
  )
}
