import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";

const pageData = {
  "/index.html": {
    title: "Strona główna",
  },
  "/abpout.html": {
    title: "O nas",
  },
  "/offer.html": {
    title: "Oferta",
  },

  "/experience.html": {
    title: "Doświadczenie",
  },
  "/gallery.html": {
    title: "Galeria",
  },
  "/work.html": {
    title: "Praca",
  },

  "/contact.html": {
    title: "Kontakt",
  },
  "/single.html": {
    title: "Single",
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
      partialDirectory: "partials",
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        offer: resolve(__dirname, "offer.html"),
        experience: resolve(__dirname, "experience.html"),
        gallery: resolve(__dirname, "gallery.html"),
        contact: resolve(__dirname, "contact.html"),
        single: resolve(__dirname, "single.html"),
        work: resolve(__dirname, "work.html"),
      },
    },
  },
});
