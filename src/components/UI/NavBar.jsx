import React from 'react'
import MyButton from './MyButton'
import { useAuth } from '../../providers/AuthProvider'
const NavBar = () => {
	const { user } = useAuth()
	return (
		<div className='bg-zinc-800 rounded-md mx-2 flex items-center justify-between'>
			<img
				src='/icon.png'
				className='w-14 h-14 p-2 ml-2 cursor-pointer'
				alt='TODO'
			/>

			{user ? (
				<div className='flex items-center justify-between'>
					<MyButton
						onClick={() => {
							localStorage.clear()
							window.location.reload()
						}}
						title={'Logout'}
					/>
				</div>
			) : (
				<div className='flex items-center justify-between'>
					<MyButton title={'Login'} />
				</div>
			)}
		</div>
	)
}

export default NavBar
