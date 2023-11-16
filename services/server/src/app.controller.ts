import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { InertiaService } from './inertia/inertia.service';

@Controller()
export class AppController {
  constructor(
    private readonly inertiaSvc: InertiaService,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(@Res() res): any {
    const user = {
      id: 1,
      name: 'Levi',
    };

    return this.inertiaSvc.render('Home', { user });
  }

  @Get('/profile')
  getProfile(@Res() res) {
    const user = {
      id: 1,
      name: 'Levi',
    };

    return res.redirect('/login');

    return this.inertiaSvc.render('Profile', { user });
  }

  @Get('/login')
  login(@Res() res): any {
    return this.inertiaSvc.render('Auth/Login');
  }
}
