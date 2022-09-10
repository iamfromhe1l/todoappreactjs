import React, { useState } from 'react'

const MyInput = ({ addTodo, placeholder }) => {
	const [title, setTitle] = useState('')
	const addTodoWithClearTitle = title => {
		addTodo(title)
		setTitle('')
	}
	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-900 border border-zinc-800 px-5 py-2 w-full'>
			<input
				className='bg-transparent w-full text-center h-8 border-none outline-none'
				type='text'
				value={title}
				onChange={e => setTitle(e.target.value)}
				placeholder={placeholder}
				onKeyPress={e => e.key === 'Enter' && addTodoWithClearTitle(title)}
			/>
		</div>
	)
}

export default MyInput
