import { Module } from '@nestjs/common';
import { InertiaService } from './inertia.service';
import { HttpAdapterHost, REQUEST } from '@nestjs/core';

@Module({
  providers: [InertiaService],
})
export class InertiaModule {
  public static async forRootAsync() {
    return {
      exports: [InertiaService],
      module: InertiaModule,
      providers: [
        {
          inject: [HttpAdapterHost],
          provide: InertiaService,
          useFactory: (nestHost: HttpAdapterHost): InertiaService =>
            InertiaService.init(nestHost.httpAdapter),
        },
      ],
    };
  }
}
