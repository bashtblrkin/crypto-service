import React, { FC, PropsWithChildren } from 'react'

import Header from '@/ui/Layout/Header/Header'

import Meta from '@/utils/Meta/Meta'
import { MetaProps } from '@/utils/Meta/meta.interface'

import styles from './Layout.module.scss'
import {useAuth} from "@/hooks/useAuth";

const Layout: FC<PropsWithChildren<MetaProps>> = ({ children, ...meta }) => {

	const {user} = useAuth()

	return (
		<>
			<Meta {...meta} />
			<div>
				<Header user={user}/>
				<main className={styles.main}>{user && children}</main>
			</div>
		</>
	)
}

export default Layout
