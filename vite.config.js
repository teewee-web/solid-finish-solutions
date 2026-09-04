import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(projectRoot, "index.html"),
        commercialPaintersLondon: resolve(projectRoot, "commercial-painters-london/index.html"),
        painterDecoratorEnfield: resolve(projectRoot, "painter-decorator-enfield/index.html"),
        interiorPaintingEnfield: resolve(projectRoot, "interior-painting-enfield/index.html"),
        exteriorPaintingEnfield: resolve(projectRoot, "exterior-painting-enfield/index.html"),
      },
    },
  },
});
