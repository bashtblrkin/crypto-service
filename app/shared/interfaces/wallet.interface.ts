import {Currency, PersonalCurrency} from '@/shared/interfaces/currency.interface'
import { User } from '@/shared/interfaces/user.interface'

export interface Wallet {
	user: User
	userCurrencies: PersonalCurrency[]
}
