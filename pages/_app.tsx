import type {AppProps} from 'next/app'

import '@/assets/styles/globals.scss'
import AuthProvider from "../app/providers/AuthProvider/AuthProvider";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

function MyApp({Component, pageProps}: AppProps) {

    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </AuthProvider>
    )
}


export default MyApp
