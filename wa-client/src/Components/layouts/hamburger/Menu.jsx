import cn from 'clsx'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import { TOKEN } from '../../../app.constants'

import styles from './hamburger.module.scss'
import { menu } from './menu.data'

const Menu = ({ isShow, setIsShow }) => {
	const { setIsAuth } = useAuth()

	const logOutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		setIsShow(false)
	}

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, idx) => (
					<li key={`_menu_${idx}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<Link to={'/auth'}>
						<button onClick={logOutHandler}>Logout</button>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
