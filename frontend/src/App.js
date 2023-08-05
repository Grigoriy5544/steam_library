import { getLibrary } from './utils/getLibrary'
import './styles/main.css'
import { useEffect, useState } from 'react'
import { useLocalStorage } from './utils/useLocalStorage'
import { Menu } from './components/menu/Menu'
import { AuthForm } from './components/authForm/AuthForm'

function App() {
	const [steamId, setSteamId] = useLocalStorage('steam_id', '')
	const [library, setLibrary] = useState()

	const getApi = async () => {
		const data = await getLibrary(steamId)
		if (data.error) {
			setLibrary({
				error: data.error,
			})
		} else setLibrary(data)
	}

	useEffect(() => {
		if (Number(steamId)) {
			getApi()
		}
	}, [steamId])
	return (
		<div className='App'>
			{Number(steamId) && library ? <Menu library={library} /> : <></>}
			{!Number(steamId) && <AuthForm />}
		</div>
	)
}

export default App
