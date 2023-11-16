import { defineConfig, loadEnv } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig(({ mode }) => {
  console.log(process.cwd());
  const env = loadEnv(mode, process.cwd(), '');

  console.log(env);

  return {
    plugins: [solidPlugin()],
    server: {
      host: '0.0.0.0',
      hmr: {
        clientPort: 80,
      },
      port: 5173,
      watch: {
        usePolling: true,
      },
    },
  };
});
