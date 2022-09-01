import { Currency } from '@/shared/interfaces/currency.interface'
import { User } from '@/shared/interfaces/user.interface'

export interface Wallet {
	user: User
	currency: Currency
	amount: number
	profit: number
}
