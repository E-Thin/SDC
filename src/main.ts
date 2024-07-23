// DONT EDIT THIS FILE

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';


async function bootstrap() {
  dotenv.config({ path: `.env.local`, override: true });

  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  await app.listen(3003);

  console.log('status server: ', process.env.NODE_ENV);

}
bootstrap();


