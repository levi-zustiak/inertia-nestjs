import { HttpServer } from '@nestjs/common';
import * as fs from 'fs';

export class InertiaService {
  public static init(server: HttpServer) {
    const self = new InertiaService();
    self.bindHttpServer(server);
    return self;
  }

  public initialized = false;
  protected rootView = 'app';

  public bindHttpServer(server: HttpServer) {
    if (this.initialized) {
      throw new Error('RenderService: already initialized');
    }

    this.initialized = true;

    const serverRender = server.render;

    server.render = (response, component, props) => {
      // console.log(response, view, data);

      console.log(response.req.header('Vary'));

      if (response.req.header('X-Inertia')) {
        return response.send({ component, props });
      }

      serverRender(response, 'app.html', { component, props });
    };
  }

  public render(response, component, data) {
    console.log(response, component, data);
  }
}

function inertiaEngine(
  filePath,
  { component, props }: { component: any; props: any },
  callback,
) {
  const file = fs.readFileSync(filePath).toString();

  const page = JSON.stringify({ component, props });

  const root = `<div id='root' data-page=${page}></div>`;

  const content = file.replace('@inertia', root);

  console.log(root);

  return callback(null, content);
}
