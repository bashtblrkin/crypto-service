import React from 'react'

import LoginForm from '@/ui/Layout/Header/LoginForm/LoginForm'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.h1}>Crypto DOM</h1>
			<LoginForm />
		</header>
	)
}

export default Header
