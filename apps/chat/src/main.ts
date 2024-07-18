import { NestFactory } from '@nestjs/core';
import { ChatModule } from './chat.module';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(ChatModule);
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(3002);
}
bootstrap();
