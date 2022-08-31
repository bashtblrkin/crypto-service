import Link from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Field from '@/ui/Field/Field'
import DropDownWrapper from '@/ui/Layout/Header/DropDownWrapper/DropDownWrapper'
import { validEmail } from '@/ui/Layout/Header/LoginForm/loginForm.constants'
import { AuthField } from '@/ui/Layout/Header/LoginForm/loginForm.interface'

import { useAuth } from '@/hooks/useAuth'

import styles from './LoginForm.module.scss'

const LoginForm = () => {
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

	return (
		<DropDownWrapper
			clickableElement={(toggleShow) => (
				<button onClick={toggleShow} className={styles.buttonSignIn}>
					<p>Вход</p>
				</button>
			)}
		>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Field
					{...register('email', {
						required: 'Поле является обязательным',
						pattern: {
							value: validEmail,
							message: 'Введён некорректный email'
						}
					})}
					placeholder="Email"
					className={styles.input}
					error={errors.email}
				/>
				<Field
					{...register('password', {
						required: 'Поле является обязательным',
						minLength: {
							value: 6,
							message: 'Минимальная длина пароля 6 символов'
						}
					})}
					placeholder="Пароль"
					type="password"
					className={styles.input}
					error={errors.password}
				/>
				<button className={styles.buttonSignIn}>Войти</button>
				<Link href={'/registration'}>
					<p className={styles.grayLink}>Регистрация</p>
				</Link>
			</form>
		</DropDownWrapper>
	)
}

export default LoginForm
