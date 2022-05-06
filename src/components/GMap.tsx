import React from 'react';
import { Map, Marker } from 'pigeon-maps';
import { stamenTerrain } from 'pigeon-maps/providers';

export default function GMap() {
	return (
		<Map height={300} defaultCenter={[51.74422, 19.81692]} defaultZoom={11}>
			<Marker width={50} anchor={[51.74422, 19.81692]} />
		</Map>
	);
}
