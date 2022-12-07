import React from 'react'

const MyButton = ({ title, ...rest }) => {
	return (
		<button
			{...rest}
			className='relative w-24 flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-800 to-purple-700 group-hover:from-pink-800 group-hover:to-purple-700 hover:text-white dark:text-white '
		>
			<span className='relative mx-0,5 w-full py-2.5 transition-all ease-in duration-75 bg-white dark:bg-zinc-900 rounded-md group-hover:bg-opacity-0'>
				{title}
			</span>
		</button>
	)
}

export default MyButton
