export interface Currency {
	id: number
	name: string
	ticker: string
}

export interface InformationCurrency extends Currency {
    price: number
    capital: number
    capacity: number
    change24h: number
    change7d: number
}

export interface PersonalCurrency extends Currency {
	percentage: number
	amount: number
	amountMark: string
    additional?: AdditionalPersonalInfoCurrency
}

export interface AdditionalPersonalInfoCurrency {
    amountOwned: number
    infoByMonth: PersonalCurrencyByMonth[]
}

export interface PersonalCurrencyByMonth {
    nameMonth: string
    boughtMonth: number
    soldMonth: number
}
