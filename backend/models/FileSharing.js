import mongoose from 'mongoose';

const fileSchema = mongoose.Schema({
	name: { type: String, require: true },
	imagePath: { type: String, require: true },
	date: { type: String },
});

const Files = mongoose.model('Files', fileSchema);

export default Files;
