import { createContext, useState, useContext } from 'react'
const userdata = localStorage.getItem('userdata')
const AuthContext = createContext({ user: userdata })

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(userdata)
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
