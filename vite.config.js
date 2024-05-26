import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'header-event-handler'
    },
    rollupOptions: {
      output: [
        {
          dir: 'dist',
          format: 'esm',
        },
        {
          dir: 'dist',
          format: 'cjs',
        },
      ],
    }
  }
})
