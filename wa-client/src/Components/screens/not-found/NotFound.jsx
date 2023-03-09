import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../layouts/Layout'

import styles from './notFound.module.scss'

const NotFound = () => {
	return (
		<Layout heading='Page not found!'>
			If you are not register click ={'>'}
			<Link to='/auth'>
				<button className={styles.authButton}>HERE</button>
			</Link>
		</Layout>
	)
}

export default NotFound
