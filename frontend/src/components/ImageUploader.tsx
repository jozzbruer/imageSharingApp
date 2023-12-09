import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useImageUpload } from '../hooks/useImageUpload';

const ImageUploader: React.FC = () => {
	const [file, setFile] = useState<File | null>(null);
	const [filename, setFilename] = useState<string>('');

	const { uploadImage, isLoading, isError } = useImageUpload();

	const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files && files.length > 0) {
			const file = files[0];
			const name = file.name.split('.');
			setFile(file);
			setFilename(name[0]);
		}
	};

	const handleUploadImage = async () => {
		if (file && filename) {
			try {
				await uploadImage(file, filename);
				setTimeout(() => {
					setFile(null);
					setFilename('');
				}, 2000);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<>
			{!file ? (
				<Button
					sx={{ marginTop: '15px', marginBottom: '10px' }}
					variant='contained'
					color='primary'
					component='label'>
					Upload
					<input
						onChange={handleSelectFile}
						type='file'
						accept='image/*'
						hidden
					/>
				</Button>
			) : (
				<Button
					onClick={handleUploadImage}
					sx={{ marginTop: '15px', marginBottom: '10px' }}
					variant='contained'
					color='secondary'
					disabled={isLoading}
					component='label'>
					{isLoading ? 'Uploading...' : 'Upload'}
				</Button>
			)}
			<div>{isError && <p style={{ color: 'red' }}>Error uploading image</p>}</div>
		</>
	);
};

export default ImageUploader;
