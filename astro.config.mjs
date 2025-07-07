// @ts-check
// Import Astro's configuration helper
import { defineConfig } from 'astro/config';

// Import Tailwind CSS plugin for Vite
import tailwindcss from '@tailwindcss/vite';

// Import React integration for Astro
import react from '@astrojs/react';

// https://astro.build/config
// Export Astro configuration
export default defineConfig({
  // Vite-specific configuration
  vite: {
    // Add Tailwind CSS as a Vite plugin
    plugins: [tailwindcss()],
  },
  // Integrate React with Astro
  integrations: [react()],
});