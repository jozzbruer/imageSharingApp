import validator from 'express-validator';
import mongoose from 'mongoose';
import express from 'express';
import HttpError from '../middleware/http-errors.js';
import Files from '../models/fileSharing.js';
import { getFormattedDate } from '../utils/formattedDate.js';

export const getAllImages = (request, response, next) => {
	response.status(201).json({ message: 'get Route is working' });
};

export const uploadImages = async (request, response, next) => {
	const currentDate = getFormattedDate();
	const validationErrors = validator.validationResult(request);

	if (!validationErrors.isEmpty()) {
		response.status(400).json({ message: 'Invalid Input' });
		return;
	}

	const { name } = request.body;

	const uploadImage = new Files({
		name,
		imagePath: 'random/path/test',
		date: currentDate,
	});

	try {
		await uploadImage.save();
		response.status(201).json({ message: 'Image Saved' });
	} catch (error) {
		response.status(400).json({ message: error });
	}
};

export const deleteImages = (request, response, next) => {
	response.status(200).json({ message: 'Delete Route is working' });
};
