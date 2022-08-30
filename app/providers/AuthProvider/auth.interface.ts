import { User } from '@/shared/interfaces/user.interface'

export type TypeUserState = User | null

export interface IAuthContext {
	user: TypeUserState
	setUser: (user: User) => void
}
