import express from 'express';
import HttpError from './middleware/http-errors.js';
import connectDB from './middleware/db.js';
import router from './routes/filesRoutes.js';

connectDB();

const app = express();
// Allow CORS

app.use((request, response, next) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	response.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	next();
});

app.use(express.json());

app.use('/api/files', router);

app.use((request, response, next) => {
	response.status(404).json({ message: 'Cannot find this endpoint' });
});

export default app;
