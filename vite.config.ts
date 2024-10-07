import { sentryVitePlugin } from '@sentry/vite-plugin';
import path from 'node:path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [
    react(),
    mkcert(),
    sentryVitePlugin({
      org: 'smart-rms',
      project: 'smart-rms-web-desktop',
      reactComponentAnnotation: { enabled: false },
    }),
  ],
  resolve: {
    alias: [
      { find: /^~(.+)/, replacement: path.join(process.cwd(), 'node_modules/$1') },
      { find: /^src(.+)/, replacement: path.join(process.cwd(), 'src/$1') },
      { find: '@components', replacement: path.join(process.cwd(), 'src/components') },
      { find: '@providers', replacement: path.join(process.cwd(), 'src/providers') },
      { find: '@services', replacement: path.join(process.cwd(), 'src/services') },
      { find: '@api', replacement: path.join(process.cwd(), 'src/api') },
      { find: '@stores', replacement: path.join(process.cwd(), 'src/stores') },
      { find: '@contexts', replacement: path.join(process.cwd(), 'src/contexts') },
      { find: '@features', replacement: path.join(process.cwd(), 'src/features') },
      { find: '@guards', replacement: path.join(process.cwd(), 'src/guards') },
      { find: '@hocs', replacement: path.join(process.cwd(), 'src/hocs') },
      { find: '@hooks', replacement: path.join(process.cwd(), 'src/hooks') },
      { find: '@layouts', replacement: path.join(process.cwd(), 'src/layouts') },
      { find: '@pages', replacement: path.join(process.cwd(), 'src/pages') },
      { find: '@libs', replacement: path.join(process.cwd(), 'src/libs') },
      { find: '@utils', replacement: path.join(process.cwd(), 'src/utils') },
      { find: '@mock', replacement: path.join(process.cwd(), 'mock') },
      { find: '@renderer', replacement: path.join(process.cwd(), 'src') },
      { find: '@slices', replacement: path.join(process.cwd(), 'src/slices') },
      { find: '@icons', replacement: path.join(process.cwd(), 'src/icons') },
      { find: '@locales', replacement: path.join(process.cwd(), 'src/locales') },
      { find: '@theme', replacement: path.join(process.cwd(), 'src/theme') },
    ],
  },
  server: {
    port: 8080,
  },
  preview: {
    port: 8080,
  },
  build: {
    rollupOptions: {
      external: ['@azure/communication-chat', '@azure/communication-calling-effects'],
    },

    sourcemap: true,
  },
});
