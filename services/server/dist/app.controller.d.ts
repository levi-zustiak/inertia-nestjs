import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): any;
    getProfile(res: any): any;
    login(): any;
}
