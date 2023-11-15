"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var InertiaModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InertiaModule = void 0;
const common_1 = require("@nestjs/common");
const inertia_service_1 = require("./inertia.service");
const core_1 = require("@nestjs/core");
let InertiaModule = InertiaModule_1 = class InertiaModule {
    static async forRootAsync() {
        return {
            exports: [inertia_service_1.InertiaService],
            module: InertiaModule_1,
            providers: [
                {
                    inject: [core_1.HttpAdapterHost],
                    provide: inertia_service_1.InertiaService,
                    useFactory: (nestHost) => inertia_service_1.InertiaService.init(nestHost.httpAdapter),
                },
            ],
        };
    }
};
exports.InertiaModule = InertiaModule;
exports.InertiaModule = InertiaModule = InertiaModule_1 = __decorate([
    (0, common_1.Module)({
        providers: [inertia_service_1.InertiaService],
    })
], InertiaModule);
//# sourceMappingURL=inertia.module.js.map