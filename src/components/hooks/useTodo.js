export const removeTodoHook = async (id, setTodos, todos) => {
	const deletedTodo = await [...todos].filter(t => t._id !== id)
	setTodos(deletedTodo)
}

export const changeTodoHook = (id, setTodos, todos) => {
	const todosCopy = [...todos]
	const cur = todosCopy.find(t => t._id === id)
	cur.isCompleted = !cur.isCompleted
	setTodos(todosCopy)
}

export const addTodoHook = (title, todos, setTodos) => {
	setTodos([
		...todos,
		{
			_id: Date.now(),
			title,
			isCompleted: false,
		},
	])
}
