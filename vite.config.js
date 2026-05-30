import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// `base` is set so assets resolve correctly when served from
// https://syedhzrizvi.github.io/career-guidance/ on GitHub Pages.
// In local dev (npm run dev) this is still served from `/` because Vite's
// dev middleware ignores the base in development.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/career-guidance/" : "/",
  plugins: [react()],
});
