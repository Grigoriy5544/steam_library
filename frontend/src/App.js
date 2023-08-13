import './styles/main.css'
import { useLocalStorage } from './utils/useLocalStorage'
import { Menu } from './components/menu/Menu'
import { AuthForm } from './components/authForm/AuthForm'

function App() {
	const [steamId, setSteamId] = useLocalStorage('steam_id', '')
	return (
		<div className='App'>
			{Number(steamId) && <Menu />}
			{!Number(steamId) && <AuthForm />}
		</div>
	)
}

export default App
