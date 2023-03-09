import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

import Auth from '../Components/screens/auth/auth'
import NotFound from '../Components/screens/not-found/NotFound'

import { routes } from './routes.data'

const RouterJsx = () => {
	const { isAuth } = useAuth()
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
export default RouterJsx
