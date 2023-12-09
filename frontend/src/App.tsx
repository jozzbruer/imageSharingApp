import React from 'react';
import './App.css';
import { Box, CircularProgress, Container, TextField, Typography } from '@mui/material';
import ImageGallery from './components/ImageGallery';
import { useFetchData } from './hooks/useFetch';
import ImageUploader from './components/ImageUploader';

const App: React.FC = () => {
	const { data, isLoading, isError } = useFetchData();

	return (
		<Container>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '110px' }}>
				<TextField
					label='Search'
					sx={{ width: '60%' }}
					variant='outlined'
					margin='normal'
				/>
				<ImageUploader />
			</Box>
			{isError ? (
				<div>Error fetching the data</div>
			) : (
				<>
					{' '}
					{isLoading ? (
						<Box sx={{ marginBottom: '30px', textAlign: 'center' }}>
							<CircularProgress />
						</Box>
					) : (
						<>
							<Box sx={{ marginBottom: '30px' }}>
								<Typography variant='h3'>
									{data.length} {`${data.length === 1}` ? 'image' : 'images'}{' '}
								</Typography>
							</Box>
							<ImageGallery images={data} />
						</>
					)}
				</>
			)}
		</Container>
	);
};

export default App;
