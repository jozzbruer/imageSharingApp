import { Alert, Button, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { useImageUpload } from '../hooks/useImageUpload';

const ImageUploader: React.FC = () => {
	const [file, setFile] = useState<File | null>(null);
	const [filename, setFilename] = useState<string>('');
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

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
				setIsSuccess(true);
				setTimeout(() => {
					setFile(null);
					setFilename('');
				}, 2000);
			} catch (error) {
				console.log(error);
			}
		}
	};
	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}
	};
	const handleCloseSuccess = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}
		setIsSuccess(false);
	};

	return (
		<>
			{!file ? (
				<Button
					sx={{ marginTop: '15px', marginBottom: '10px' }}
					variant='contained'
					color='primary'
					component='label'>
					Select
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
			<div>
				<Snackbar
					open={isError}
					autoHideDuration={3000}
					onClose={handleClose}>
					<Alert
						onClose={handleClose}
						severity='error'
						sx={{ width: '100%' }}>
						Failed to upload image
					</Alert>
				</Snackbar>
				<Snackbar
					open={isSuccess}
					autoHideDuration={6000}
					onClose={handleCloseSuccess}>
					<Alert
						onClose={handleCloseSuccess}
						severity='success'
						sx={{ width: '100%' }}>
						Image Uploaded
					</Alert>
				</Snackbar>
			</div>
		</>
	);
};

export default ImageUploader;
