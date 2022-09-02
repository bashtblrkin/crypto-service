import Cookies from "js-cookie";
import {IAuthResponse} from "../../providers/AuthProvider/auth.interface";

export const saveTokenToCookie = (accessToken: string) => {
    Cookies.set('accessToken', accessToken)
}

export const removeTokenFromStorage = () => {
    Cookies.remove('accessToken')
}

export const saveToStorage = (data: IAuthResponse) => {
    saveTokenToCookie(data.accessToken)
    localStorage.setItem('user', JSON.stringify(data.user))
}