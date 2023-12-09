import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(
			'mongodb+srv://joz:bouzen3@filesharing.i5xe8yb.mongodb.net/FileSharing?retryWrites=true&w=majority'
		);
		console.log(`Database connected: ${connection.connection.host} 🚀`);
	} catch (error) {
		console.log('Cannot connect to the database');
	}
};

export default connectDB;
