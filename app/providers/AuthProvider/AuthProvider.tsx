import {IAuthContext, TypeUserState} from './auth.interface'
import React, {createContext, FC, PropsWithChildren, useEffect, useState} from 'react'

import {User} from '@/shared/interfaces/user.interface'
import {useRouter} from "next/router";
import Cookies from "js-cookie";
import {AuthService} from "@/services/auth/auth.service";

export const AuthContext = createContext({} as IAuthContext)

/*{
		id: 1,
		name: 'Иван',
		email: 'dasdsad',
		avatarPath: ''
	}*/

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {

	const [user, setUser] = useState<TypeUserState>(null)

	const {pathname} = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (!accessToken) return

		const user = JSON.parse(localStorage.getItem('user') || '')

		setUser(user)
	}, [])

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (!accessToken && !user) {
			AuthService.logout()
			setUser(null)
		}
	}, [pathname]) //eslint-disable-line react-hooks/exhaustive-deps

	const handleSetUser = (user: User) => {
		setUser(user)
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser: handleSetUser
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
