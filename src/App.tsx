import Home from './components/screens/Home/Home'
import React from 'react'
import NavBar from './components/UI/NavBar'
import Auth from './components/screens/Auth/Auth'
import { useAuth } from './providers/AuthProvider'

function App() {
	const { user } = useAuth()
	return user ? (
		<div className='bg-zinc-900'>
			<NavBar />
			<Home />
		</div>
	) : (
		<div className='bg-zinc-900'>
			<NavBar />
			<Auth />
		</div>
	)
}
export default App
