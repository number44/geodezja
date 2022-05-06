import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import handlebars from 'vite-plugin-handlebars';

const pageData = {
	'/index.html': {
		title: 'Strona główna',
	},
	'/abpout.html': {
		title: 'O nas',
	},
	'/offer.html': {
		title: 'Oferta',
	},

	'/experience.html': {
		title: 'Doświadczenie',
	},
	'/gallery.html': {
		title: 'Galeria',
	},
	'/work.html': {
		title: 'Praca',
	},

	'/contact.html': {
		title: 'Kontakt',
	},
	'/single.html': {
		title: 'Single',
	},
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		handlebars({
			context(pagePath) {
				return pageData[pagePath];
			},
			partialDirectory: 'partials',
		}),
	],
});
