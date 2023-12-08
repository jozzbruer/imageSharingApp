import { randomUUID } from 'crypto';
import multer, { diskStorage } from 'multer';

const MIME_TYPE_MAP = {
	'image/jpeg': 'jpg',
	'image/jpg': 'jpg',
	'image/png': 'png',
	'image/gif': 'gif',
	'image/tiff': 'tiff',
	'image/bmp': 'bmp',
	'image/svg+xml': 'svg',
	'image/webp': 'webp',
	'image/x-icon': 'ico',
	'image/jp2': 'jp2',
	'image/apng': 'apng',
	'image/avif': 'avif',
};

export const uploadFiles = multer({
	limits: 500000,
	storage: diskStorage({
		destination: (request, file, callback) => {
			callback(null, 'uploads/images');
		},
		filename: (request, file, callback) => {
			const extension = MIME_TYPE_MAP[file.mimetype];
			callback(null, randomUUID() + '.' + extension);
		},
	}),
	fileFilter: (request, file, callback) => {
		const isValid = !!MIME_TYPE_MAP[file.mimetype]; // return truthy value
		let error = isValid ? null : new Error('Invalid type of file');
		callback(error, isValid);
	},
});
