import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/api'
axios.defaults.headers.options = {
	'Content-Type': 'application/json',
}
export const AuthService = {
	async login(email: string, password: string) {
		const res = await axios.post('auth/login', { email, password })
		if (res.status === 200) {
			localStorage.setItem('userdata', JSON.stringify(res.data.user))
		}
		return res
	},
	async register(email: string, password: string) {
		const res = await axios.post('auth/register', { email, password })
		if (res.status === 200) {
			localStorage.setItem('userdata', JSON.stringify(res.data.user))
		}
		return res
	},
}
