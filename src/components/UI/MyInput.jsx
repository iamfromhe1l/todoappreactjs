import React, { useState } from 'react'

const MyInput = ({ addTodo, placeholder }) => {
	const [title, setTitle] = useState('')
	const addTodoWithClearTitle = title => {
		addTodo(title)
		setTitle('')
	}
	return (
		<div className='relative flex items-center justify-between mb-4 rounded-2xl h-14 bg-zinc-900 bg-gradient-to-br from-pink-800 to-purple-700 px-0.5 w-full'>
			<input
				className='bg-zinc-800 w-full text-center border-none outline-none transition-all ease-in duration-75 relative rounded-2xl focus:bg-zinc-900'
				type='text'
				value={title}
				style={{ height: '94%' }}
				onChange={e => setTitle(e.target.value)}
				placeholder={placeholder}
				onKeyPress={e => e.key === 'Enter' && addTodoWithClearTitle(title)}
			/>
		</div>
	)
}

export default MyInput
