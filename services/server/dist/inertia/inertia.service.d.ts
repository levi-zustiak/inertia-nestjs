import { HttpServer } from '@nestjs/common';
export declare class InertiaService {
    static init(server: HttpServer): InertiaService;
    initialized: boolean;
    protected rootView: string;
    bindHttpServer(server: HttpServer): void;
    render(response: any, component: any, data: any): void;
}
