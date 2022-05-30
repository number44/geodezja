import React from 'react';

import ReactDom from 'react-dom';
import { LightElement } from './LightElement';
interface PropsI {
	images: ImageI[];
	open: boolean;
	selectedId: number;
	onClose: () => void;
}

import { motion, AnimatePresence } from 'framer-motion';
const variants = {
	enter: (direction: number) => {
		return {
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			opacity: 0,
		};
	},
};

const LightShow = ({ images, selectedId, open, onClose }: PropsI) => {
	if (!open) {
		return null;
	}
	const el = document.querySelector('.module-element');
	if (!el) {
		return null;
	}
	console.log('images :', images);
	console.log('selectedId :', selectedId);
	return ReactDom.createPortal(
		<div className="slideshow-container">
			<LightElement show={true} onClose={onClose} images={images} selectedId={selectedId} />
		</div>,
		el
	);
};

export default LightShow;
