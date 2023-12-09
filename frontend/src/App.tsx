import React from 'react';
import './App.css';
import { Box, Button, Container, TextField } from '@mui/material';

const App: React.FC = () => {
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
		</Container>
	);
};

export default App;
