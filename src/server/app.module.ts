import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InertiaModule } from './inertia/inertia.module';

@Module({
  imports: [InertiaModule.forRootAsync()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
