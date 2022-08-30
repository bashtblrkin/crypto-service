import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { AuthField } from '@/ui/Layout/Header/LoginForm/loginForm.interface'

import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'

import styles from './LoginForm.module.scss'

const LoginForm = () => {
	const { ref, setIsShow, isShow } = useOutside(false)

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<AuthField>({
		mode: 'onChange'
	})

	const { setUser } = useAuth()

	const onSubmit: SubmitHandler<AuthField> = (data) => {
		if (type === 'login')
			setUser({
				id: 1,
				name: 'Ivan',
				avatarPath: '/avatar.png',
				email: 'mymail@mail.ru'
			})
	}

	return <div>LoginForm</div>
}

export default LoginForm
