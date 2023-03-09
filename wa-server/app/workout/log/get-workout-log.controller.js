import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'

// desc GET workout log
// route GET /api/workout/log/:id
// access private
export const getWorkoutLog = asyncHandler(async (req, res) => {
	const workoutLog = await prisma.workoutLog.findUnique({
		where: {
			id: +req.params.id
		},
		include: {
			workout: {
				include: {
					exercises: true
				}
			},
			exerciseLogs: {
				orderBy: {
					id: 'asc'
				},
				include: {
					exercise: true
				}
			}
		}
	})
	if (!workoutLog) {
		res.status(404)
		throw new Error('workout log is not found!')
	}
	res.json({
		...workoutLog,
		minutes: Math.ceil(workoutLog.workout.exercises.length)
	})
})
