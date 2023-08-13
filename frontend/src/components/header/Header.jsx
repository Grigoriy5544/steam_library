import { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import { useLocalStorage } from '../../utils/useLocalStorage'
import { AiOutlineArrowRight } from "react-icons/ai"
import { useUserInfo } from '../../hooks/useUserInfo'

export const Header = () => {
  const [steamId, setSteamId] = useLocalStorage('steam_id', '')
  const [userInfo, setUserInfo] = useState([])

  const { isLoading, data: useInfo, isSuccess } = useUserInfo(steamId)
  useEffect(() => {
    if (isSuccess) setUserInfo(useInfo)
  }, [isLoading])

  return (
    <nav className={styles.header}>
      <div className={styles.title}>Библиотека</div>
      {isSuccess && (
        <div className={styles.user} >
        <img src={userInfo.avatarmedium} alt="logo" className={styles.image} onClick={() => window.open(userInfo.profileurl, "_blank")}/>
        <p className={styles.user_name} onClick={() => window.open(userInfo.profileurl, "_blank")}>{userInfo.personaname}</p>
        <p>{userInfo.player_level}LVL</p>
        <AiOutlineArrowRight fontSize="20px" onClick={() => {
          setSteamId('')
          window.location.reload()
        }}/>
      </div>
      )}
    </nav>
  )
}
