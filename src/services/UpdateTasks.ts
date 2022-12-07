import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/api'
axios.defaults.headers.options = {
	'Content-Type': 'application/json',
}

export const updateTask = async () => {
	await axios.post('tasks/updateTask', JSON.parse(localStorage['userdata']))
}
