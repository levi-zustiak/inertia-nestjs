import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';

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

  @Get('/profile')
  @Render('Profile')
  getProfile(@Res() res): any {
    const user = {
      id: 1,
      name: 'Levi',
    };

    res.status(401).redirect('/login');

    return {
      user,
    };
  }

  @Get('/login')
  @Render('Auth/Login')
  login(): any {
    return {};
  }
}
