import { AppService } from './app.service';
import { Request } from 'express';
export declare class AppController {
    private req;
    private readonly appService;
    constructor(req: Request, appService: AppService);
    getHello(): any;
    getProfile(res: any): any;
    login(): any;
    render(component: any, props: any): void | {
        component: any;
        props: any;
        url: string;
    };
}
