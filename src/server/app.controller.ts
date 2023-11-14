import { Controller, Get, Render, Res, Response } from '@nestjs/common';
import { AppService } from './app.service';

function render(component, props) {
  return {
    component,
    props,
  };
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
}
