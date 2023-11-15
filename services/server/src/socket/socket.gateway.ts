import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SocketGateway implements OnGatewayInit, OnGatewayConnection {
  @WebSocketServer() server: any;
  private logger: Logger = new Logger('Websocket');

  @SubscribeMessage('foo')
  foo(@ConnectedSocket() client: any, @MessageBody() data: any) {
    this.logger.log('Socket event: foo', data);
  }

  public afterInit(server: any) {
    this.logger.log('Initialized');
  }

  public handleConnection(client: any) {
    this.logger.log('Client connected');
  }
}
