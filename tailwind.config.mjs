import { defineConfig } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default defineConfig({
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte,mdx,md,html}",
    "./components/**/*.{astro,js,jsx,ts,tsx,vue,svelte,mdx,md,html}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {}
  },
  plugins: [typography]
});
