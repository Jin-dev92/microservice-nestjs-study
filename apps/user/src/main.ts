import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import * as process from 'node:process';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(process.env.PORT);
}
bootstrap();
