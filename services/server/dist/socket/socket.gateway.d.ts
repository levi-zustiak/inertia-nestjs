import { OnGatewayConnection, OnGatewayInit } from '@nestjs/websockets';
export declare class SocketGateway implements OnGatewayInit, OnGatewayConnection {
    server: any;
    private logger;
    foo(client: any, data: any): void;
    afterInit(server: any): void;
    handleConnection(client: any): void;
}
