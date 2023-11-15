import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as fs from 'fs';
import { inertia } from './inertia/inertia.middleware';

function inertiaEngine(filePath, { page }, callback) {
  const file = fs.readFileSync(filePath).toString();

  const root = `<div id='root' data-page=${JSON.stringify(page)}></div>`;

  const content = file.replace('@inertia', root);

  return callback(null, content);
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.engine('html', inertiaEngine);
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('html');

  app.use(inertia);

  await app.listen(8080);
}
bootstrap();
