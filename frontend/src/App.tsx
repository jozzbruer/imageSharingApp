import React, { useState } from 'react';
import './App.css';
import { Box, CircularProgress, Container, TextField, Typography } from '@mui/material';
import ImageGallery from './components/ImageGallery';
import { useFetchData } from './hooks/useFetch';
import ImageUploader from './components/ImageUploader';
import { useSearchQuery } from './hooks/useSearchQuery';

const App: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const { data: allData, isLoading: allDataLoading, isError: allDataError } = useFetchData();
	const {
		data: searchData,
		isLoading: searchDataLoading,
		isError: searchDataError,
	} = useSearchQuery(searchQuery);

	const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
		const search = encodeURIComponent(e.target.value);
		setSearchQuery(search);
	};

	return (
		<Container>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '110px' }}>
				<TextField
					label='Search'
					sx={{ width: '60%' }}
					variant='outlined'
					margin='normal'
					value={searchQuery}
					onChange={handleSearchQuery}
				/>
				<ImageUploader />
			</Box>
			{allDataError || searchDataError ? (
				<div>Error fetching the data</div>
			) : (
				<>
					{' '}
					{allDataLoading || searchDataLoading ? (
						<Box sx={{ marginBottom: '30px', textAlign: 'center' }}>
							<CircularProgress />
						</Box>
					) : (
						<>
							<Box sx={{ marginBottom: '30px' }}>
								{searchQuery ? ( // Render if we searching data or not
									<Typography variant='h3'>
										{searchData.length === 0 ? 'No' : searchData.length}{' '}
										{searchData.length === 1 ? 'image' : 'images'}{' '}
									</Typography>
								) : (
									<Typography variant='h3'>
										{allData.length === 0 ? 'No' : allData.length}{' '}
										{allData.length === 1 ? 'image' : 'images'}{' '}
									</Typography>
								)}
							</Box>

							{searchQuery ? ( // Render if we searching data or not
								<ImageGallery images={searchData} />
							) : (
								<ImageGallery images={allData} />
							)}
						</>
					)}
				</>
			)}
		</Container>
	);
};

export default App;
