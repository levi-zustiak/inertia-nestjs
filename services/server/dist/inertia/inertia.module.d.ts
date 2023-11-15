import { InertiaService } from './inertia.service';
import { HttpAdapterHost } from '@nestjs/core';
export declare class InertiaModule {
    static forRootAsync(): Promise<{
        exports: (typeof InertiaService)[];
        module: typeof InertiaModule;
        providers: {
            inject: (typeof HttpAdapterHost)[];
            provide: typeof InertiaService;
            useFactory: (nestHost: HttpAdapterHost) => InertiaService;
        }[];
    }>;
}
