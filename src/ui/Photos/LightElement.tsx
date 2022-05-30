import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import './lightshow.scss';
const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
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
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

interface PropsI {
	images: ImageI[];
	selectedId: number;
	show: boolean;
	onClose: () => void;
}

export const LightElement = ({ onClose, selectedId, images, show }: PropsI) => {
	const [[page, direction], setPage] = useState([0, 0]);
	const imageIndex = wrap(0, images.length, page);
	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};
	const [newImages, setNewImages] = useState<ImageI[]>([]);
	const onKeyPress = (e: KeyboardEvent) => {
		if (e.keyCode == 27) {
			onClose();
		}
		/**
		 * ISSUE FINISH keys
		 */
		// if (e.keyCode == 37) {
		// 	setPage((state) => {
		// 		if()

		// 		return [0,1]
		// 	});
		// 	console.log('paginate(-1) :');
		// }
		// if (e.keyCode == 39) {
		// 	paginate(1);
		// }
		console.log('e :', e);
		// if(e.keyCode == "ArrowRight"){

		// }
	};
	const findIndexOfSelectedId = (images: ImageI[]) => {
		const i = images.findIndex((elem) => {
			return elem.id == selectedId;
		});
		return i;
	};

	useEffect(() => {
		document.addEventListener('keydown', onKeyPress, false);
		console.log('selectedId :', selectedId);
		const newI = findIndexOfSelectedId(images);
		console.log('newI :', newI);
		setPage((state) => [newI, 0]);
		return () => {
			document.removeEventListener('keydown', onKeyPress);
		};
	}, []);
	if (!newImages) {
		return null;
	}

	return (
		<>
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					className="slide-image"
					key={page}
					src={images[imageIndex].src}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x);

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1);
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1);
						}
					}}
				/>
			</AnimatePresence>
			<div className="next" onClick={() => paginate(1)}>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</div>
			<div className="prev" onClick={() => paginate(-1)}>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
				</svg>
			</div>
			<div className="close-light" onClick={onClose}>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</div>
		</>
	);
};

interface ImageI {
	id: number;
	src: string;
	alt: string;
}
