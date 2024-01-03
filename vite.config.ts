/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        clearMocks: true,
        coverage: {
            include: ["src/**/*"],
            exclude: ["src/main.tsx", "src/vite-env.d.ts", "src/**/*.tsx"],
            thresholds: {
                "100": true,
            },
            provider: "v8",
            reporter: ["text", "html", "json"],
            reportsDirectory: "coverage",
        },
    },
});
