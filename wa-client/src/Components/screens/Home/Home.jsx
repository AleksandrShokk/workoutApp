import bgImg from '/gigachad.jpg'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Layout from '../../layouts/Layout'
import Button from '../../ui/Buttons/button'

import styles from './home.module.scss'

function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	return (
		<Layout bgImg={bgImg}>
			<Button
				clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}
			>
				{isAuth ? 'New workout' : 'Authorization'}
			</Button>
			<h1 className={styles.heading}>
				{isAuth
					? 'EXERCISES FOR THE SHOULDERS'
					: 'BECOME GIGACHAD NOW!'}
			</h1>
		</Layout>
	)
}

export default Home
