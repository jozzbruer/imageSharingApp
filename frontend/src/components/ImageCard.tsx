import React from 'react';

interface ImageCardProps {
	name: string;
	imagePath: string;
}
const ImageCard: React.FC<ImageCardProps> = ({ name, imagePath }) => {
	return <div>ImageCard</div>;
};

export default ImageCard;
