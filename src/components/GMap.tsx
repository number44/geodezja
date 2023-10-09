import React from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import { stamenTerrain } from "pigeon-maps/providers";

export default function GMap() {
  return (
    <Map height={300} defaultCenter={coordinates} defaultZoom={11}>
      <Overlay anchor={coordinates} offset={[30, 40]}>
        <a href="">
          <img src={imgUrl} width={50} alt="" />
        </a>
      </Overlay>
    </Map>
  );
}
