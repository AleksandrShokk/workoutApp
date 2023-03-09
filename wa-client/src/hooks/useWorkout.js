import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import WorkoutLogService from '../services/workouts/workout-log.service'
import WorkoutService from '../services/workouts/workout.service'

export const useWorkout = () => {
	const { data, isSuccess } = useQuery(
		['get workouts'],
		() => WorkoutService.getAll(),
		{
			select: ({ data }) => data
		}
	)
	const navigate = useNavigate()
	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(
		[`create workout log`],
		workoutId => WorkoutLogService.create(workoutId),
		{
			onSuccess({ data }) {
				navigate(`/workout/${data.id}`)
			}
		}
	)
	return {
		data,
		isSuccess,
		mutate,
		isLoading,
		isSuccessMutate,
		error
	}
}
