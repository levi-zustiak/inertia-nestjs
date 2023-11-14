import * as fs from 'fs';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

let exitHandlersBound = false;

function nest() {
  let viteDevServerUrl, resolvedConfig, userConfig;
  let hotFile = 'public/hot';

  return {
    name: 'nest',
    enforce: 'post',
    config: (config, { command, mode }) => ({
      base: 'http://localhost:8080',
      publicDir: false,
      server: {
        origin: '__nest_vite_placeholder__',
      },
    }),
    configResolved(config) {
      resolvedConfig = config;
    },
    transform(code) {
      if (resolvedConfig.command === 'server') {
        code = code.replace(/__nest_vite_placeholder__/g, viteDevServerUrl);

        console.log(code);

        return code;
      }
    },
    configureServer(server) {
      const appUrl = 'http://localhost:8080/';

      server.httpServer?.once('listening', () => {
        const address = server.httpServer?.address();

        const isAddressInfo = (x) => typeof x === 'object';
        if (isAddressInfo(address)) {
          viteDevServerUrl = resolveDevServerUrl(address, server.config);
          fs.writeFileSync(hotFile, viteDevServerUrl);

          setTimeout(() => {
            server.config.logger.info(`\n |----NEST----|`);
            server.config.logger.info(`APP_URL: ${appUrl}`);
          }, 100);
        }
      });

      if (!exitHandlersBound) {
        const clean = () => {
          if (fs.existsSync(hotFile)) {
            fs.rmSync(hotFile);
          }
        };

        process.on('exit', clean);
        process.on('SIGINT', process.exit);
        process.on('SIGTERM', process.exit);
        process.on('SIGHUP', process.exit);

        exitHandlersBound = true;
      }
    },
  };
}

function resolveDevServerUrl(address, config) {
  // const configHmrProtocol =
  //   typeof config.server.hmr === 'object' ? config.server.hmr.protocol : null;
  const serverProtocol = config.server.https ? 'https' : 'http';
  const protocol = serverProtocol;

  const serverAddress = isIpv6(address)
    ? `[${address.address}]`
    : address.address;

  const host = serverAddress;
  const port = address.port;

  return `${protocol}://${host}:${port}`;
}

function isIpv6(address) {
  return address.family === 'IPv6' || address.family === 6;
}

export default defineConfig({
  plugins: [
    // nest(),
    solidPlugin(),
    // solidPlugin({
    //   include: ['./src/client'],
    // }),
  ],
});
