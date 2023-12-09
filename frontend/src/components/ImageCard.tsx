import { MoreVertOutlined } from '@mui/icons-material';
import {
	Card,
	CardContent,
	CardMedia,
	IconButton,
	Menu,
	MenuItem,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';

interface ImageCardProps {
	name: string;
	imagePath: string;
}

const baseURL = 'http://localhost:3001/';
const ImageCard: React.FC<ImageCardProps> = ({ name, imagePath }) => {
	const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorElement(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorElement(null);
	};
	return (
		<Card>
			<CardMedia
				component='img'
				height='300'
				width='300'
				image={`${baseURL}${imagePath}`}
				alt={name}
			/>
			<CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography variant='subtitle1'>{name}</Typography>
				<IconButton
					aria-label='more'
					aria-controls='image-menu'
					aria-haspopup='true'
					onClick={handleClick}>
					<MoreVertOutlined />
				</IconButton>
				<Menu
					id='image-menu'
					anchorEl={anchorElement}
					keepMounted
					open={Boolean(anchorElement)}
					onClose={handleClose}>
					<MenuItem>Delete</MenuItem>
				</Menu>
			</CardContent>
		</Card>
	);
};

export default ImageCard;
