import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = new ConfigService().get('PORT') || 4242;
  await app.listen(port);
}
bootstrap();
