import { IAuthContext, TypeUserState } from './auth.interface'
import React, { FC, PropsWithChildren, createContext, useState } from 'react'

import { User } from '@/shared/interfaces/user.interface'

export const AuthContext = createContext({} as IAuthContext)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)

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
