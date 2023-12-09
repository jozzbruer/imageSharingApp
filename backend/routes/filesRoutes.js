import validator from 'express-validator';
import { Router } from 'express';
import {
	deleteImages,
	getAllImages,
	uploadImages,
} from '../controllers/filesControllers.js';

const router = Router();

router.get('/', getAllImages);
router.post(
	'/upload',
	[
		validator.check('name').notEmpty(),
		validator.check('name').isLength({ min: 3 }),
	],
	uploadImages
);
router.delete('/:id', deleteImages);

export default router;
