import React from 'react'

const ButtonGradient = ({ title, ...rest }) => {
	return (
		<button
			{...rest}
			className='p-2 rounded-lg w-24 text-center my-3 bg-gradient-to-br from-pink-800 to-purple-700 '
		>
			{title}
		</button>
	)
}

export default ButtonGradient
