import anime from 'animejs';

const targets = [...document.querySelectorAll('[data-nr]')];

interface animeObjI {
	nr: number;
}
const detect = () => {
	let options = {
		root: document,
		rootMargin: '0px',
		threshold: 0.25,
	};

	const callback = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry, index) => {
			const el = entry.target as HTMLElement;

			if (entry.isIntersecting) {
				console.log('el :', el);
				[...Array(el.dataset.nr).keys()].forEach((e) => {
					if (el.dataset.nr) {
						el.innerHTML = el.dataset.nr.toString();
						const animeObj: animeObjI = {
							nr: 0,
						};
						anime({
							targets: animeObj,
							nr: el.dataset.nr,
							duration: 2000,
							update: () => {
								if (el.dataset.nr) {
									el.innerHTML = Math.floor(animeObj.nr).toString();
								}
							},
						});
					}
				});
			}
		});
	};
	let observer: IntersectionObserver = new IntersectionObserver(callback, options);
	if (targets) {
		targets.forEach((t) => {
			observer.observe(t);
		});
	}
};
export default detect;
