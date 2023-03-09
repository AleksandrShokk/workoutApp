import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'

//desc Create new workouts
//api Post /api/workouts
//access Private
export const createNewWorkout = asyncHandler(async (req, res) => {
	const { name, exerciseIds } = req.body

	const workout = await prisma.workout.create({
		data: {
			name,
			exercises: {
				connect: exerciseIds.map(id => ({ id: +id }))
			}
		}
	})

	res.json(workout)
})

//desc Get workouts
//api Get /api/workouts
//access Private

export const getWorkouts = asyncHandler(async (req, res) => {
	const workouts = await prisma.workout.findMany({
		orderBy: {
			createdAt: 'desc'
		},

		include: {
			exercises: true
		}
	})
	res.json(workouts)
})

//desc Get workout
//api Get /api/workout/:id
//access Private

export const getWorkout = asyncHandler(async (req, res) => {
	const workout = await prisma.workout.findUnique({
		where: { id: +req.params.id },
		include: {
			exercises: true
		}
	})
	if (!workout) {
		res.status(404)
		throw new Error('Workout not found!')
	}
	const minutes = Math.ceil(workout.exercises.lenght * 3.7)

	res.json({ ...workout, minutes })
})

export const updateWorkout = asyncHandler(async (req, res) => {
	try {
		const { name, exerciseIds } = req.body
		const updateWO = await prisma.workout.update({
			where: {
				id: +req.params.id
			},
			data: {
				name,
				exercises: {
					set: exerciseIds.map(id => ({ id: +id }))
				}
			}
		})
		res.json(updateWO)
	} catch (error) {
		res.status(404)
		throw new Error('Workout not found')
	}
})
export const deleteWorkout = asyncHandler(async (req, res) => {
	try {
		const id = req.params.id
		const deleteWO = await prisma.workout.delete({
			where: {
				id: Number(id)
			}
		})
		res.json('Workout deleted!')
	} catch (error) {
		res.status(404)
		throw new Error('Workout not found')
	}
})
