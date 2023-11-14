import { RENDER_METADATA } from '@nestjs/common/constants';

export function Render() {
  return (target: object, key: string | symbol, descriptor: any) => {
    Reflect.defineMetadata(RENDER_METADATA, 'app.html', descriptor.value);
    return descriptor;
  };
}
