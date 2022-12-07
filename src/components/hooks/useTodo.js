import { updateTask } from '../../services/UpdateTasks'

const changeLoacalStorageTodo = updateTodo => {
	const localStorageUpdated = JSON.parse(localStorage['userdata'])
	localStorageUpdated['tasks'] = updateTodo
	localStorage.setItem('userdata', JSON.stringify(localStorageUpdated))
}
export const removeTodoHook = async (id, setTodos, todos) => {
	const deletedTodo = await [...todos].filter(t => t._id !== id)
	changeLoacalStorageTodo(deletedTodo)
	updateTask()
	setTodos(deletedTodo)
}

export const changeTodoHook = async (id, setTodos, todos) => {
	const todosCopy = [...todos]
	const cur = todosCopy.find(t => t._id === id)
	cur.isCompleted = !cur.isCompleted
	changeLoacalStorageTodo(todosCopy)
	updateTask()
	setTodos(todosCopy)
}

export const addTodoHook = async (title, todos, setTodos) => {
	const updatedTodo = [
		...todos,
		{
			_id: Date.now(),
			title,
			isCompleted: false,
		},
	]
	changeLoacalStorageTodo(updatedTodo)
	updateTask()
	setTodos(updatedTodo)
}
