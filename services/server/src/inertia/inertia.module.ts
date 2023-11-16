import { Global, Module } from '@nestjs/common';
import { InertiaService } from './inertia.service';

@Global()
@Module({
  providers: [InertiaService],
  exports: [InertiaService],
})
export class InertiaModule {
  // public static async forRootAsync() {
  //   return {
  //     exports: [InertiaService],
  //     module: InertiaModule,
  //     providers: [
  //       {
  //         inject: [REQUEST],
  //         provider: InertiaService,
  //       },
  //     ],
  //   };
  // }
}
