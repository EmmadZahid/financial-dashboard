import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import svgr from "@svgr/rollup";

export default defineConfig({
  plugins: [svgr({}), react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "msw/node": "msw/lib/node/index.js",
    },
  },
  build: {
    target: "esnext", // or 'es2022'
  },
});
