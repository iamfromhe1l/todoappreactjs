import React from 'react'
import MyInput from '../../../UI/MyInput'

const CreateTodoField = ({ addTodo }) => {
	return (
		<div className='pt-4'>
			<MyInput addTodo={addTodo} placeholder='Add a task' />
		</div>
	)
}

export default CreateTodoField
