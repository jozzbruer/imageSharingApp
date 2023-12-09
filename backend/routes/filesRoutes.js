import validator from 'express-validator';
import { Router } from 'express';
import {
	deleteImages,
	getAllImages,
	searchImageByName,
	uploadImages,
} from '../controllers/filesControllers.js';
import { uploadFiles } from '../middleware/fileUpload.js';

const router = Router();
//Routes
router.get('/', getAllImages);
router.post(
	'/upload',
	uploadFiles.single('imagePath'),
	[validator.check('name').notEmpty(), validator.check('name').isLength({ min: 3 })],
	uploadImages
);
router.get('/search', searchImageByName);
router.delete('/:id', deleteImages);

export default router;
