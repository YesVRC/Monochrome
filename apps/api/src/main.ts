import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.use(cookieParser());
  //app.enableCors({credentials: true, origin: ['http://localhost:5173', 'https://monovrc.com', "http://monovrc.com", 'https://api.monovrc.com', "http://api.monovrc.com"]})
  const config = new DocumentBuilder()
    .setTitle('MonoVRC')
    .setDescription('API backend for the MonoVRC website')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
