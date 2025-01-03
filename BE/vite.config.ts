import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  plugins: [
    VitePluginNode({
      adapter: 'express',
      appPath: './src/app.ts',
      exportName: 'viteNodeApp',
    }),
  ],
  server: {
    port: 3000,
  },
});
