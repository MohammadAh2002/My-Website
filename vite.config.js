import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base: "./" so the build works on GitHub Pages (project or user pages) and any static host.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
