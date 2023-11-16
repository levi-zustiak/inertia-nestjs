import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class InertiaService {
  constructor(@Inject(REQUEST) private req: Request) {}

  public async render(component, props = {}) {
    const res = this.req.res;

    const page = {
      component,
      props,
      url: this.getUrl(),
    };

    if (this.req.header('X-Inertia')) {
      res.header('X-Inertia', 'true');
      // res.header('Vary', 'X-Inertia');

      // return res.send(page);
      return res.send(page);
    }

    return res.render('app', { page });
  }

  private getUrl(): string {
    return this.req.baseUrl + this.req.path;
  }
  // public static init(server: HttpServer) {
  //   const self = new InertiaService();
  //   self.bindHttpServer(server);
  //   return self;
  // }

  // public initialized = false;
  // protected rootView = 'app';

  // public bindHttpServer(server: HttpServer) {
  //   if (this.initialized) {
  //     throw new Error('RenderService: already initialized');
  //   }

  //   this.initialized = true;

  //   const serverRender = server.render;

  //   server.render = (response: Response, component, props) => {
  //     const req = response.req;
  //     const url = req.baseUrl + req.path;

  //     const page = {
  //       component,
  //       props,
  //       url,
  //     };

  //     if (response.req.header('X-Inertia')) {
  //       return response.header('X-Inertia', 'true').send(page);
  //     }

  //     serverRender(response, 'app.html', { page });
  //   };
  // }

  // public render(response, component, data) {
  //   console.log(response, component, data);
  // }
}
