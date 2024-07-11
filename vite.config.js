import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from 'preact'`,
  },
  plugins: [],
  alias: {
    react: "preact/compat",
  },
  root: "src",
  base: "",
  build: {
    outDir: "../dist",
  },
});
