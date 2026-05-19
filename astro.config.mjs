// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from '@tailwindcss/vite';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // 1. Configurás el sitio base (esencial para que funcione tu paquete RSS)
  // aquí va la url del sitio
  site: "https://example.com",

  // 2. Configurás el plugin de Tailwind CSS a través de Vite
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact()]
});