import React, {FC} from 'react'

import LoginForm from '@/ui/Layout/Header/LoginForm/LoginForm'

import styles from './Header.module.scss'
import {HeaderProps} from "@/ui/Layout/Header/header.interface";
import UserAvatar from "@/ui/Layout/Header/UserAvatar/UserAvatar";


const Header: FC<HeaderProps> = ({user }) => {

	if (user) {
		return (
			<header className={styles.header}>
				<h1 className={styles.h1}>Привет, {user.name} </h1>
				<UserAvatar avatarPath={user.avatarPath}/>
			</header>
		)
	}

	return (
		<header className={styles.header}>
			<h1 className={styles.h1}>Crypto<span>BTR</span></h1>
			<LoginForm />
		</header>
	)
}

export default Header
