import { Grid } from '@mui/material';
import React from 'react';
import ImageCard from './ImageCard';

interface ImageGalleryProps {
	images: Array<{ _id: number; name: string; imagePath: string }>;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
	return (
		<Grid
			container
			spacing={2}>
			{images.map((image) => (
				<Grid
					key={image._id}
					item
					xs={12}
					sm={6}
					md={6}>
					<ImageCard
						name={image.name}
						imagePath={image.imagePath}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default ImageGallery;
