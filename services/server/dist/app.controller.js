"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const core_1 = require("@nestjs/core");
let AppController = class AppController {
    constructor(req, appService) {
        this.req = req;
        this.appService = appService;
    }
    getHello() {
        const user = {
            id: 1,
            name: 'Levi',
        };
        return {
            user,
        };
    }
    getProfile(res) {
        const user = {
            id: 1,
            name: 'Levi',
        };
        return res.redirect('/login');
        return this.render('Profile', { user });
    }
    login() {
        return {};
    }
    render(component, props) {
        const res = this.req.res;
        const url = this.req.baseUrl + this.req.path;
        const page = {
            component,
            props,
            url,
        };
        if (this.req.header('X-Inertia')) {
            res.header('X-Inertia', 'true');
            return page;
        }
        return res.render('app.html', { page });
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('Home'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/profile'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('/login'),
    (0, common_1.Render)('Auth/Login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "login", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object, app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map