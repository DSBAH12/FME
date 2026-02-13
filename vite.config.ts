import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/FME/",
  plugins: [react()],
  server: {
    port: 5173,
  },
});
