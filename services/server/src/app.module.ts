import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InertiaModule } from './inertia/inertia.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [SocketModule, InertiaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
