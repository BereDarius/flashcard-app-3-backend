import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const environment = process.env.NODE_ENV;

  if (environment === 'production') {
    app.use(helmet());
  }

  app.enableCors();

  await app.listen(3000);

  app.use(csurf());
}
bootstrap();
