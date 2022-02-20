import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as rateLimit from 'express-rate-limit';
import * as compression from 'compression';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TransformInterceptor } from './interceptors/tansform.interceptor';
import { HttpExceptionFilter } from './filters/http-exception.filter';

const port = 3060;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('/api');
  app.use(
    rateLimit({
      windowMs: 60 * 1000, // 1 minutes
      max: 10000, // limit each IP to 1000 requests per windowMs
    }),
  );
  app.use(compression()); // 启用 gzip 压缩

  // 统一响应和异常
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  const options = new DocumentBuilder()
    .setTitle('Dashboard Open Api')
    .setDescription('Dashboard Open Api Document')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log('[](start in port):', port);
}
bootstrap();
