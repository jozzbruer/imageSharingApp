import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		console.log(`Database connected: ${connection.connection.host} 🚀`);
	} catch (error) {
		console.log('Cannot connect to the database');
	}
};

export default connectDB;
