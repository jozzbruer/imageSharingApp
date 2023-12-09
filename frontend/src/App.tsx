import React from 'react';
import './App.css';
import { Box, Button, Container, TextField } from '@mui/material';
import ImageGallery from './components/ImageGallery';

const App: React.FC = () => {
	const images = Array.from({ length: 18 }, (_, index) => ({
		id: index + 1,
		name: `Image ${index + 1}`,
		imagePath: `https://placekitten.com/300/200?image=${index + 1}`,
	}));
	return (
		<Container>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<TextField
					label='Search'
					sx={{ width: '60%' }}
					variant='outlined'
					margin='normal'
				/>
				<Button
					sx={{ marginTop: '15px', marginBottom: '10px' }}
					variant='contained'
					color='primary'
					component='label'>
					Upload
					<input
						type='file'
						hidden
					/>
				</Button>
			</Box>
			<ImageGallery images={images} />
		</Container>
	);
};

export default App;
