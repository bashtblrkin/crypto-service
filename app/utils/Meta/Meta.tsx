import Head from 'next/head'
import React, { FC } from 'react'
import {MetaProps} from "@/utils/Meta/meta.interface";

const Meta: FC<MetaProps> = ({ title, description }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="shortcut icon" href={"/favicon.png"} type="image/png" />
				{description ? (
					<meta
						itemProp="description"
						name="description"
						content={description}
					/>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
		</>
	)
}

export default Meta
