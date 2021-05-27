import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 인자로 받는 것만 들어오게 할 수 있음
      forbidNonWhitelisted: true, // 메세지로 해당 인자는 사용할 수 없다고 안내함
      transform: true, // 우리가 원하는 타입으로 변환해줌
    }),
  );
  await app.listen(3000);
}
bootstrap();
