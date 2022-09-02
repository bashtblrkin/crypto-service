export interface AuthField {
    email: string
    password: string
}

export interface LoginFormProps {
    onChangeTypeForm: (type: 'login' | 'register') => void
}