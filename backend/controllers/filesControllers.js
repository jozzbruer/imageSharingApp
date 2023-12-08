import validator from 'express-validator';
import mongoose from 'mongoose';
import express from 'express';
import HttpError from '../middleware/http-errors.js';
import Files from '../models/fileSharing.js';

export const getAllImages = (request, response, next) => {
	response.status(201).json({ message: 'get Route is working' });
};

export const uploadImages = (request, response, next) => {
	response.status(200).json({ message: 'Post Route is working' });
};

export const deleteImages = (request, response, next) => {
	response.status(200).json({ message: 'Delete Route is working' });
};
