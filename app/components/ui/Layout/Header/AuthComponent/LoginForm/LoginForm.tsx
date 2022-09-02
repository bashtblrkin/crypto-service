
import React, {FC} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'

import Field from '@/ui/Field/Field'
import {validEmail} from '@/ui/Layout/Header/AuthComponent/LoginForm/loginForm.constants'
import {AuthField} from '@/ui/Layout/Header/AuthComponent/LoginForm/loginForm.interface'

import {useAuth} from '@/hooks/useAuth'

import styles from './LoginForm.module.scss'
import {useMutation} from "react-query";
import {AuthService} from "@/services/auth/auth.service";
import {AuthorizeForm} from "@/shared/interfaces/form.interface";

const LoginForm: FC<AuthorizeForm> = ({onChangeTypeForm}) => {

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<AuthField>({
		mode: 'onChange'
	})

	const { setUser } = useAuth()

	const {mutate: loginSync} = useMutation(
		['login'],
		(data: AuthField) => AuthService.login(data.email, data.password),
		{
			onSuccess(data) {
				setUser(data.user)
				reset()
			}
		}
	)

	const onSubmit: SubmitHandler<AuthField> = (data) => {
		loginSync(data)
	}

	return (
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
				<p className={styles.grayLink} onClick={() => {onChangeTypeForm('register')}}>Регистрация</p>
			</form>
	)
}

export default LoginForm
