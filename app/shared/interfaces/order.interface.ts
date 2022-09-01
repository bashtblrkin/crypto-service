import {User} from "@/shared/interfaces/user.interface";
import {Currency} from "@/shared/interfaces/currency.interface";

export interface Order {
    user: User
    currency: Currency
    date: Date
    type: 'sold' | 'buy'
    amount: number
}