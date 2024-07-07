import { defineConfig } from "vite";
import prefresh from "@prefresh/vite";

export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from 'preact'`,
  },
  plugins: [
    prefresh(),
    [
      "@babel/plugin-transform-react-jsx",
      {
        pragma: "h",
        pragmaFrag: "Fragment",
      },
    ],
  ],
  alias: {
    react: "preact/compat",
  },
  root: "src",
  base: "/gishur-il/",
  build: {
    outDir: "../dist",
  },
});
