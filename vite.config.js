import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig(() => {
	return {
		plugins: [svelte()],
		assetsInclude: ['**/*.riv']
	}
});
