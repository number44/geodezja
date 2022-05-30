import React, { ReactNode, useEffect, useState } from 'react';
import { render } from 'react-dom';
import './gallery.scss';
import './lightshow.scss';

import { LightElement } from './LightElement';
import LightShow from './LightShow';
import Photo from './Photo';
interface PropsI {
	images: ImageI[];
}

const Photos = ({ images }: PropsI) => {
	useEffect(() => {}, []);
	const [show, toggleShow] = useState(false);
	const [selectedId, setSelectedId] = useState<number>(0);
	const selectId = (id: number) => {
		toggleShow(true);
		setSelectedId(id);
	};
	const onClose = () => {
		toggleShow(false);
	};
	return (
		<>
			<div className="photos-grid">
				{images?.map((image) => (
					<div key={image.id}>
						<Photo selectId={selectId} image={image} />
					</div>
				))}
			</div>
			<div className="imagesxxx">
				<LightShow images={images} selectedId={selectedId} open={show} onClose={onClose} />
			</div>
		</>
	);
};

export default Photos;
