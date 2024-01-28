import typescript from "@rollup/plugin-typescript";
import meta from "./src/meta";

export default {
  input: "src/index.ts",
  output: {
    format: "iife",
    file: "dist/index.user.js",
    banner: meta,
  },
  plugins: [typescript()],
};
