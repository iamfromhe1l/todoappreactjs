import React, { useState } from 'react'
import {
	addTodoHook,
	changeTodoHook,
	removeTodoHook,
} from '../../hooks/useTodo'
import CreateTodoField from './CreateTodoField/CreateTodoField'
import TodoItem from './item/TodoItem'

const Home = () => {
	const data = JSON.parse(localStorage['userdata'])['tasks']
	const [todos, setTodos] = useState(data)
	const getFormattedDate = date => {
		var options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
		}
		const formattedDate = new Date(date)
		return formattedDate.toLocaleDateString('ru-RU', options)
	}

	const changeTodo = id => changeTodoHook(id, setTodos, todos)
	const removeTodo = async id => await removeTodoHook(id, setTodos, todos)
	const addTodo = title => addTodoHook(title, todos, setTodos)

	return (
		<div className='text-white w-4/5 mx-auto mt-10'>
			<h1 className='text-5xl font-bold text-center mb-9'>ToDo For Junior</h1>
			{todos.map(todo => (
				<TodoItem
					date={getFormattedDate(todo._id)}
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
			))}
			<CreateTodoField addTodo={addTodo} />
		</div>
	)
}

export default Home
