//desc Create new exercises
//api Post /api/exercises
//access Private
import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'

export const createNewExercise = asyncHandler(async (req, res) => {
	const { name, times, iconPath } = req.body

	const exercise = await prisma.exercise.create({
		data: {
			name,
			times,
			iconPath
		}
	})
	res.json(exercise)
})

//desc Get exercises
//api Get /api/exercises
//access Private

export const getExercises = asyncHandler(async (req, res) => {
	const exercises = await prisma.exercise.findMany({
		orderBy: {
			createdAt: 'desc'
		}
	})
	res.json(exercises)
})
export const updateExercise = asyncHandler(async (req, res) => {
	try {
		const id = +req.params.id
		const { name, times, iconPath } = req.body
		const updateEx = await prisma.exercise.update({
			where: {
				id: id
			},
			data: {
				name,
				times,
				iconPath
			}
		})
		res.json(updateEx)
	} catch (error) {
		res.status(404)
		throw new Error('Exercise not found')
	}
})
export const deleteExercise = asyncHandler(async (req, res) => {
	try {
		const id = req.params.id
		const deleteEx = await prisma.exercise.delete({
			where: {
				id: Number(id)
			}
		})
		res.json('Exercise deleted!')
	} catch (error) {
		res.status(404)
		throw new Error('Exercise not found')
	}
})
