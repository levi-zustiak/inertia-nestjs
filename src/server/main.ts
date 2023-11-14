import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as fs from 'fs';
import { inertia } from './inertia/inertia.middleware';

function inertiaEngine(
  filePath,
  { component, props }: { component: any; props: any },
  callback,
) {
  const file = fs.readFileSync(filePath).toString();

  const page = JSON.stringify({ component, props });

  const root = `<div id='root' data-page=${page}></div>`;

  const content = file.replace('@inertia', root);

  console.log(root);

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
