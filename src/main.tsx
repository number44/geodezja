import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GMap from "./components/GMap";
// import Carousel from "./components/Carousel";
import init from "./index";
// import PhotoGallery from "./components/PhotoGallery";
window.onload = init;

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );
const footerMap = document.querySelectorAll(".footer-map");

if (footerMap) {
  footerMap.forEach((map) => {
    ReactDOM.render(
      <React.StrictMode>
        <GMap />
      </React.StrictMode>,
      map
    );
  });
}
// const slider1 = document.querySelector('.carousel');

// ReactDOM.render(
// 	<React.StrictMode>
// 		<Carousel />
// 	</React.StrictMode>,
// 	slider1
// );
// const gallery = document.querySelector("#gallery");

// if (gallery) {
//   ReactDOM.render(
//     <React.StrictMode>
//       <PhotoGallery />
//     </React.StrictMode>,
//     gallery
//   );
// }
