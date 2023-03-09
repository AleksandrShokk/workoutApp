import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'

import { addPrevValues } from './add-prev-values.utils.js'

// desc GET ex log
// route GET /api/exercises/log/:id
// access private
export const getExerciseLog = asyncHandler(async (req, res) => {
	const exerciseLog = await prisma.exerciseLog.findUnique({
		where: {
			id: +req.params.id
		},
		include: {
			exercise: true,
			times: {
				orderBy: {
					id: 'asc'
				}
			}
		}
	})
	if (!exerciseLog) {
		res.status(404)
		throw new Error('Exercise log is not found!')
	}
	const prevExerciseLog = await prisma.exerciseLog.findFirst({
		where: {
			exerciseId: exerciseLog.exerciseId,
			userId: req.user.id,
			isCompleted: true
		},
		orderBy: {
			createdAt: 'desc'
		},
		include: {
			times: true
		}
	})
	const newTimes = addPrevValues(exerciseLog, prevExerciseLog)
	res.json({ ...exerciseLog, times: newTimes })
})