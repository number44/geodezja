import React, { useEffect, useLayoutEffect, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
interface PropsI {}
const Carousel = ({}: PropsI) => {
	const ref1 = useRef<HTMLDivElement>(null);

	useEffect(() => {
		ref1.current?.addEventListener('touchmove', (e) => {
			console.log('e :', e);
		});
		return;
	}, []);
	useLayoutEffect(() => {
		ref1.current?.addEventListener('click', (e) => {
			console.log('e :', e);
		});
	});
	return (
		<Swiper className="carouse1l">
			{[1, 2, 3].map((i, el) => {
				return (
					<SwiperSlide className="slide" key={i}>
						Slidex {el}
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default Carousel;
