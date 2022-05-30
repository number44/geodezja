import React, { useEffect } from 'react';
import Photos from '../ui/Photos/Photos';

const imagesUrls = ['/gallery/IMG_20220411_073703-min.jpg', '/gallery/IMG_20220411_074442-min.jpg', '/gallery/IMG_20220411_083747-min.jpg', '/gallery/IMG_20220411_083828-min.jpg', '/gallery/IMG_20220411_084128-min.jpg', '/gallery/IMG_20220411_084232-min.jpg', '/gallery/IMG_20220411_104438-min.jpg'];
const images: ImageI[] = [
	{
		id: 0,
		src: imagesUrls[0],
		alt: imagesUrls[0],
		description: 'beatiful image description',
	},
	{
		id: 1,
		src: imagesUrls[1],
		alt: imagesUrls[1],
		description: 'beatiful image description',
	},

	{
		id: 2,
		src: imagesUrls[2],
		alt: imagesUrls[2],
		description: 'beatiful image description',
	},
	{
		id: 3,
		src: imagesUrls[3],
		alt: imagesUrls[3],
		description: 'beatiful image description',
	},
	{
		id: 4,
		src: imagesUrls[4],
		alt: imagesUrls[4],
		description: 'beatiful image description',
	},
	{
		id: 5,
		src: imagesUrls[5],
		alt: imagesUrls[5],
		description: 'beatiful image description',
	},
	{
		id: 6,
		src: imagesUrls[6],
		alt: imagesUrls[6],
		description: 'beatiful image description',
	},
];
interface PropsI {
	images?: ImageI[];
}

const PhotoGallery = ({}: PropsI) => {
	// const images2 = images ? images : [];

	return <div>{images && <Photos images={images} />}</div>;
};

export default PhotoGallery;
