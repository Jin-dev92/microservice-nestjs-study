import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway(+process.env.PORT, {
  transports: ['websocket'],
  cors: { origin: '*' },
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor() {}

  afterInit(server: Server): any {
    console.log('채팅 웹소켓 서버가 초기화되었습니다.');
  }

  @SubscribeMessage('events')
  handleEvent(client: Socket, message: string): WsResponse<string> {
    return {
      event: 'events',
      data: `서버에서 메시지가 도착했습니다. 테스트용, ${message}`,
    };
  }

  handleConnection(client: Socket, ...args: any[]): void {
    // console.log('client', client);
    // console.log('args', args);
    console.log('클라이언트가 연결되었습니다.');
  }

  handleDisconnect(client: Socket): void {
    // console.log(client);
    console.log('클라이언트가 종료되었습니다.');
  }
}
