import { HttpServer } from '@nestjs/common';
import { Response } from 'express';

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

    server.render = (response: Response, component, props) => {
      const req = response.req;
      const url = req.baseUrl + req.path;

      const page = {
        component,
        props,
        url,
      };

      if (response.req.header('X-Inertia')) {
        return response.header('X-Inertia', 'true').send(page);
      }

      serverRender(response, 'app.html', { page });
    };
  }

  public render(response, component, data) {
    console.log(response, component, data);
  }
}
