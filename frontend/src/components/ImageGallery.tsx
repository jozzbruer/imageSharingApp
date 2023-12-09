import { Grid } from '@mui/material';
import React from 'react';

interface ImageGalleryProps {
	images: Array<{ id: number; name: string; imagePath: string }>;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
	return (
		<Grid
			container
			spacing={2}>
			{images.map((image) => (
				<Grid
					key={image.id}
					item
					xs={12}
					sm={6}
					md={4}>
					Image here
				</Grid>
			))}
		</Grid>
	);
};

export default ImageGallery;
