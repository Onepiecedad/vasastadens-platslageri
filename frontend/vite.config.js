import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['VITE_', 'REACT_APP_']);

  return {
    plugins: [
      react({
        include: ['**/*.{jsx,tsx,js,ts}'],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    envPrefix: ['VITE_', 'REACT_APP_'],
    esbuild: {
      loader: 'jsx',
      include: /src\/.*\.[jt]sx?$/,
    },
    server: {
      port: env.VITE_DEV_SERVER_PORT
        ? Number(env.VITE_DEV_SERVER_PORT)
        : 5173,
      host: true,
    },
    test: {
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
      globals: true,
    },
  };
});
