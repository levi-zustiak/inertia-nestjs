import { Controller, Get, Inject, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(
    @Inject(REQUEST) private req: Request,
    private readonly appService: AppService,
  ) {}

  @Get()
  @Render('Home')
  getHello(): any {
    const user = {
      id: 1,
      name: 'Levi',
    };

    return {
      user,
    };
  }

  @Get('/profile')
  getProfile(@Res() res) {
    const user = {
      id: 1,
      name: 'Levi',
    };

    return res.redirect('/login');

    return this.render('Profile', { user });
  }

  @Get('/login')
  @Render('Auth/Login')
  login(): any {
    return {};
  }

render(component, props) {
  const res = this.req.res;
  const url = this.req.baseUrl + this.req.path;

  const page = {
    component,
    props,
    url,
  };

  if (this.req.header('X-Inertia')) {
    res.header('X-Inertia', 'true');

    return page;
  }

  return res.render('app.html', { page });
}
}
