import { defineConfig } from "vite";
import react from "vite-preset-react";
import tsconfigPaths from "vite-tsconfig-paths";
import macrosPlugin from "vite-plugin-babel-macros";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), macrosPlugin()],
  define: {
    "process.platform": JSON.stringify("win32"),
    "process.env": {},
  },
});
