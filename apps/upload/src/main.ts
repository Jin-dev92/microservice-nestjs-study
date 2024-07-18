import { NestFactory } from '@nestjs/core';
import { UploadModule } from './upload.module';

async function bootstrap() {
  const app = await NestFactory.create(UploadModule);
  await app.listen(3001);
}
bootstrap();
