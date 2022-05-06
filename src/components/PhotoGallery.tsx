import React, { useEffect } from 'react';
import { Photos } from 'ui';
interface ImageI {
	id: number;
	src: string;
	alt: string;
}

const imagesUrls = [
	'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
	'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
	'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
];
const images: ImageI[] = [
	{
		id: 0,
		src: imagesUrls[0],
		alt: imagesUrls[0],
	},
	{
		id: 1,
		src: imagesUrls[1],
		alt: imagesUrls[1],
	},

	{
		id: 3,
		src: imagesUrls[2],
		alt: imagesUrls[2],
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
