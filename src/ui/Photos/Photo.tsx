import React from 'react';
interface PropsI {
	image: ImageI;
	selectId: (id: number) => void;
}
const Photo = ({ image, selectId }: PropsI) => {
	const handler = () => {
		selectId(image.id);
	};
	return (
		<div onClick={handler} key={image.id} className="cursor-zoom">
			<div className="photo">
				<figure>
					<img src={image.src} alt="" />
					<div className="zoom">
						<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
						</svg>
					</div>
				</figure>
			</div>
			<p className="title">Title</p>
			<p className="description">
				<small>{image.description}</small>
			</p>
		</div>
	);
};

export default Photo;
