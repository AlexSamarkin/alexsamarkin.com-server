import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from "@nestjs/config";
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  const cors = configService.get('cors');
  app.setGlobalPrefix('api');
  if (cors) {
    app.enableCors({
      origin: configService.get('origin')
    });
  }

  app.use(helmet())

  await app.listen(configService.get('port') || 3000);
}

bootstrap();