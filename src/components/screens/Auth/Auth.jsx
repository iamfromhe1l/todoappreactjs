import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useAuth } from '../../../providers/AuthProvider'
import { AuthService } from '../../../services/AuthService'
import ButtonGradient from '../../UI/ButtonGradient'

const Auth = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
	})
	const [type, setType] = useState('login')
	const { setUser } = useAuth()
	const [err, setErr] = useState('')

	const { mutateAsync: loginAsync } = useMutation(
		'login',
		() => AuthService.login(data.email, data.password),
		{
			onError: err => {
				const errorMessage = err.response.data.message
				setErr(String(errorMessage))
			},
			onSuccess: ({ data }) => {
				setUser(data.user)
			},
		}
	)

	const { mutateAsync: registerAsync } = useMutation(
		'register',
		() => AuthService.register(data.email, data.password),
		{
			onError: err => {
				const errorMessage = err.response.data.message
				setErr(String(errorMessage))
			},
			onSuccess: ({ data }) => {
				setUser(data.user)
			},
		}
	)
	const isAuthType = type === 'login'
	const handleSubmit = e => {
		e.preventDefault()

		if (isAuthType) {
			registerAsync()
		} else {
			loginAsync()
		}
	}

	return (
		<div className='text-white w-4/5 mx-auto mt-10'>
			<h1 className='text-5xl font-bold text-center mb-9'>Authourisation</h1>
			<form onSubmit={handleSubmit}>
				<input
					className='bg-transparent w-full p-2 border-b-2 border-zinc-800 outline-none rounded-lg focus:border-white'
					type='email'
					placeholder='Email'
					value={data.email}
					onChange={e => setData({ ...data, email: e.target.value })}
					required
				/>
				<input
					className='bg-transparent w-full p-2 border-b-2 mt-4 border-zinc-800 outline-none rounded-lg focus:border-white'
					type='password'
					placeholder='Password'
					value={data.password}
					onChange={e => setData({ ...data, password: e.target.value })}
					required
				/>
				<div className='my-2'>
					<span className=' text-red-500'>{err}</span>
				</div>
				<ButtonGradient
					title={!isAuthType ? 'Login' : 'Register'}
					type='submit'
				/>
				<div
					className=' cursor-pointer text-zinc-500'
					onClick={e => {
						e.stopPropagation()
						setType(isAuthType ? 'register' : 'login')
					}}
				>
					I want to {isAuthType ? 'login' : 'register'}
				</div>
			</form>
		</div>
	)
}

export default Auth
