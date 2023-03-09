import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'

//desc Update workout complete
//@route PATCH /api/workouts/log/complete/:id
//access private

export const updateWorkoutLogCompleted = asyncHandler(async (req, res) => {
	const logId = +req.params.id
	try {
		const workoutLog = await prisma.workoutLog.update({
			where: {
				id: logId
			},
			data: {
				isCompleted: true
			}
		})
		res.json(workoutLog)
	} catch (error) {
		res.status(404)
		throw new Error('Workout log is not found!')
	}
})
