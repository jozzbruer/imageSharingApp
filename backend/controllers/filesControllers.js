import validator from 'express-validator';
import fs from 'fs/promises';
import Files from '../models/fileSharing.js';
import { getFormattedDate } from '../utils/formattedDate.js';
import { error } from 'console';

export const getAllImages = async (request, response, next) => {
	try {
		const data = await Files.find();
		response.status(201).json({ data });
	} catch (error) {
		response.status(404).json({ error });
	}
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
		imagePath: request.file.path,
		date: currentDate,
	});

	try {
		await uploadImage.save();
		response.status(201).json({ message: 'Image Saved' });
	} catch (error) {
		response.status(400).json({ message: error });
	}
};

export const deleteImages = async (request, response, next) => {
	const id = request.params.id;
	try {
		const image = await Files.findByIdAndDelete(id);
		if (image) {
			await fs.unlink(image.imagePath);
			response.status(201).json({ image });
		} else response.status(404).json({ message: 'Not exist' });
	} catch (error) {
		response
			.status(404)
			.json({ message: 'An error has occured while deleting this file' });
	}
};
