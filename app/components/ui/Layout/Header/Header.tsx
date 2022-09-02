import React, {FC} from 'react'
import {FiHelpCircle} from 'react-icons/fi'
import {IoMdNotificationsOutline} from 'react-icons/io'

import LoginForm from '@/ui/Layout/Header/AuthComponent/LoginForm/LoginForm'
import UserAvatar from '@/ui/Layout/Header/UserAvatar/UserAvatar'
import {HeaderProps} from '@/ui/Layout/Header/header.interface'

import styles from './Header.module.scss'
import AuthComponent from "@/ui/Layout/Header/AuthComponent/AuthComponent";

const Header: FC<HeaderProps> = ({ user }) => {
	if (user) {
		return (
			<header className={styles.header}>
				<h1 className={styles.h1}>Привет, {user.name} </h1>
				<div className={styles.iconsWraper}>
					<FiHelpCircle className={styles.icon}/>
					<IoMdNotificationsOutline className={styles.icon}/>
					<UserAvatar avatarPath={user.avatarPath} />
				</div>
			</header>
		)
	}

	return (
		<header className={styles.header}>
			<h1 className={styles.h1}>
				Crypto<span>BTR</span>
			</h1>
			<AuthComponent />
		</header>
	)
}

export default Header
