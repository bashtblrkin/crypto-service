import type { NextPage } from 'next'

import Layout from '@/ui/Layout/Layout'
import AuthProvider from "../app/providers/AuthProvider/AuthProvider";

const Home: NextPage = () => {
	return (
		<AuthProvider>
			<Layout title="Crypto DOM">
				Главная
			</Layout>
		</AuthProvider>
	)
}

export default Home
