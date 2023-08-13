import { Games } from '../games/Games'
import styles from "./menu.module.css"
import { useLocalStorage } from '../../utils/useLocalStorage'
import { Header } from '../header/Header'
import { Content } from '../content/Content'

export function Menu() {
  const [steamId, setSteamId] = useLocalStorage('steam_id', '')

  return (
    <>
    {steamId ? 
      <div className={styles.Menu}>
        <Header/>
        <Games className={styles.sidebar}/>
        <Content/>
      </div>  
     : (
      <div className={styles.error}>
        <h3 className={styles.title}>Ошибка</h3>
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
