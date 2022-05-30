import React from 'react';
import { Map, Marker, Overlay } from 'pigeon-maps';
import { stamenTerrain } from 'pigeon-maps/providers';

export default function GMap() {
	const imageUrl = './marker-white.png';
	return (
		<Map height={300} defaultCenter={[51.74422, 19.81692]} defaultZoom={11}>
			<Overlay anchor={[51.74422, 19.81692]} offset={[30, 40]}>
				<a href="">
					<img src={imageUrl} width={50} alt="" />
				</a>
			</Overlay>
		</Map>
	);
}
