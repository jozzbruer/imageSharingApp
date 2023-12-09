import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

interface ImageCardProps {
	name: string;
	imagePath: string;
}
const ImageCard: React.FC<ImageCardProps> = ({ name, imagePath }) => {
	return (
		<Card>
			<CardMedia
				component='img'
				height='300'
				width='300'
				image={imagePath}
				alt={name}
			/>
			<CardContent>
				<Typography variant='subtitle1'>{name}</Typography>
			</CardContent>
		</Card>
	);
};

export default ImageCard;
