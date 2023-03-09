import Home from '../Components/screens/Home/Home'
import Auth from '../Components/screens/auth/auth'
import Exercise from '../Components/screens/exercise/Exercise'
import NewExercise from '../Components/screens/new-exercise/NewExercise'
import NewWorkout from '../Components/screens/new-workout/NewWorkout'
import Profile from '../Components/screens/profile/Profile'
import Workout from '../Components/screens/workouts/detail/Workout'
import ListWorkouts from '../Components/screens/workouts/list/ListWorkouts'

export const routes = [
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/',
		component: Home,
		isAuth: true
	},

	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		isAuth: true
	},
	{
		path: '/workout/:id',
		component: Workout,
		isAuth: true
	},
	{
		path: '/exercise/:id',
		component: Exercise,
		isAuth: true
	},
	{
		path: '/workouts',
		component: ListWorkouts,
		isAuth: true
	}
]
