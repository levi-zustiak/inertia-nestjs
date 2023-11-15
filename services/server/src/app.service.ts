import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      user: {
        id: 1,
        name: 'Levi',
      },
    };
  }
}
