import anime, { AnimeInstance } from 'animejs';
import { throttle, detectScroll } from './utils';
import jump from 'jump.js';
import detect from './scripts/detect';
const indicator = document.querySelector('.target') as HTMLDivElement;
const progressBar = document.querySelector('.progress') as HTMLDivElement;
const preloader = document.querySelector('#preloader');
const up = document.querySelector('#up');
const navbar = document.querySelector('.main-navbar') as HTMLElement;
const footer = document.querySelector('footer') as HTMLDivElement;
const top = document.querySelector('.top') as HTMLElement;
// import Propagation from './Propagation';
// Propagation();
const main = document.querySelector('main');
up?.addEventListener('click', () => {
	jump('.top');
});
if (main) {
	jump('main', {
		offset: -10000,
	});
}

let lists = document.querySelectorAll<HTMLElement>('[data-target]');

const mainBtn = document.querySelector('.main-btn');

mainBtn?.addEventListener(
	'click',
	(e) => {
		e.stopImmediatePropagation();
		jump(About, { offset: -23 });
	},
	{ capture: true }
);

const links = Array.from(lists);

links.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		jump(`${link.dataset.target}`);
	});
});
function init() {
	detectScroll(doSomething, 100);
	detect();
	anime({
		targets: '.span',
		opacity: 0,
		scale: 0.2,
		delay: anime.stagger(100),
		complete: () =>
			anime({
				targets: '#preloader',
				translateX: '100vw',
				duration: 1000,
				complete: () => {
					preloader?.classList.add('hidden');
				},
			}),
	});
	document.querySelectorAll('.accordion-header').forEach((ah) => {
		ah?.addEventListener('click', function (this: HTMLDivElement) {
			let el = this.nextElementSibling;
			let arrow = this.children[1];
			arrow.classList.toggle('rotate');
			el?.classList.toggle('hide-content');
		});
	});
	// document.querySelector('.accordion-header')?.addEventListener('click', function (this: HTMLDivElement) {
	// 	let el = this.nextElementSibling;
	// 	console.log('el :', el);
	// 	let arrow = this.children[1];
	// 	console.log('arrow :', arrow);
	// 	arrow.classList.toggle('rotate');
	// 	el?.classList.toggle('hide-content');
	// });
}
export default init;

const doSomething = async (nr: number) => {
	// const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	const scrolled = (nr / height) * 100;
	progressBar.style.width = scrolled + '%';
	if (nr > 50) {
		navbar.classList.add('scrolled');
		up?.classList.add('show');
	} else {
		navbar.classList.remove('scrolled');
		up?.classList.remove('show');
	}
};

import Swiper, { EffectCube, Navigation, Pagination } from 'swiper';

// import styles bundle
import 'swiper/css';
import 'swiper/scss/effect-cube ';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	effect: 'cube',
	autoplay: {
		delay: 1000,
	},
	modules: [Pagination, EffectCube],
	cubeEffect: {
		slideShadows: true,
	},
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// }(),

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

const swiper2 = new Swiper('.swiper2', {
	// Optional parameters
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	modules: [Pagination],
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
	},
});
const btnPrimary = document.querySelector('.btn-primary') as HTMLDivElement;
const About = document.querySelector('#about') as HTMLElement;

const menuIcon = document.querySelector('.menu-icon') as HTMLElement;
const sideBar = document.querySelector('#sidebar') as HTMLElement;
const closeIcon = document.querySelector('.close') as HTMLElement;

menuIcon?.addEventListener('click', () => {
	sideBar?.classList.remove('hide');
});
closeIcon?.addEventListener('click', () => {
	sideBar?.classList.add('hide');
});
