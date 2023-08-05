import { useState } from 'react'
import styles from './style.module.css'
import { useLocalStorage } from '../../utils/useLocalStorage'

export const AuthForm = () => {
  const [value, setValue] = useState('')
  const [steamId, setSteamId] = useLocalStorage('steam_id', '')
  return (
    <div className={styles.form}>
      <div className={styles.title}>Войти</div>
      <div>
        <div className={styles.text}>ВОЙТИ, ИСПОЛЬЗУЯ STEAM ID</div>
        <input type="number" value={value} onChange={event => setValue(event.target.value)} placeholder='Steam Id' className={styles.input}></input>
      </div>
      <button className={styles.button} onClick={() => {
        setSteamId(value)
        window.location.reload()
      }}>Войти</button>
    </div>
  )
}
