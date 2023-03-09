import gigaProfile from '/public/gigaprofile.jpg'
import cn from 'clsx'
import React from 'react'

import { useProfile } from '../../../hooks/useProfile'

import Layout from '../../layouts/Layout'
import stylesLayout from '../../layouts/Layout.module.scss'
import Header from '../../layouts/header/Header'

import styles from './profile.module.scss'
import Statistics from './statistics/Statistics'

const Profile = () => {
	const { data } = useProfile()
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('${gigaProfile}')`
			}}
		>
			<Header />

			<div className={styles.center}>
				<img
					src='/icons8-user.png'
					alt='Profile'
					height={70}
					draggable={false}
				></img>
				<h1 className={stylesLayout.heading}>{data?.email}</h1>
			</div>
			<Statistics />
		</div>
	)
}

export default Profile
