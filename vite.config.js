import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" membuat jalur file relatif, sehingga website bisa jalan di
// GitHub Pages (alamat berupa /nama-repo/), Vercel, maupun Netlify.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
