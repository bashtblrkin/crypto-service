import Image from 'next/image'
import React from 'react'

import LoginForm from '@/ui/Layout/Header/LoginForm/LoginForm'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<Image src="" alt="" />
			<LoginForm />
		</header>
	)
}

export default Header
