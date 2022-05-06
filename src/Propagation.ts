const grandpa = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

const Propagation = () => {
	grandpa?.addEventListener('click', (e) => {
		console.log('Grandpa 1 :');
	});
	parent?.addEventListener('click', () => {
		console.log('Parent 1 :');
	});
	child?.addEventListener('click', () => {
		console.log('Child 1');
	});
	document.addEventListener('click', () => {
		console.log('Document 1');
	});
};

export default Propagation;
