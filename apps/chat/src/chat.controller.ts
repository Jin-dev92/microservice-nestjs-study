import { Controller, Get } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';

@Controller()
export class ChatController {
  constructor(private readonly chatGateway: ChatGateway) {}

  @Get()
  getHello() {
    // return this.chatGateway.handleMessage('테스트');
  }
}
