import React, { useState } from 'react'
import {
	addTodoHook,
	changeTodoHook,
	removeTodoHook,
} from '../../hooks/useTodo'
import CreateTodoField from './CreateTodoField/CreateTodoField'
import TodoItem from './item/TodoItem'

const data = [
	{
		_id: '1',
		title: 'Finish the course',
		isCompleted: false,
	},
	{
		_id: '2',
		title: 'Homework',
		isCompleted: false,
	},
]

const Home = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = id => changeTodoHook(id, setTodos, todos)
	const removeTodo = async id => await removeTodoHook(id, setTodos, todos)
	const addTodo = title => addTodoHook(title, todos, setTodos)

	return (
		<div className='text-white w-4/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-9'>ToDo For Junior</h1>
			{todos.map(todo => (
				<TodoItem
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
