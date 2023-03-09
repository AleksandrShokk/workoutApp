import { FiArrowLeft, FiUser } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger.jsx'

import styles from './Header.module.scss'

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	if (!isAuth) return <header className={styles.header}></header>

	return (
		<header className={styles.header}>
			{pathname !== '/' || !isAuth ? (
				<button
					onClick={() => {
						navigate(isAuth ? backLink : '/auth')
					}}
				>
					<FiArrowLeft />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					<FiUser />
				</button>
			)}

			{isAuth ? <Hamburger /> : null}
		</header>
	)
}

export default Header
