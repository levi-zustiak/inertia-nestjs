"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const fs = require("fs");
const inertia_middleware_1 = require("./inertia/inertia.middleware");
function inertiaEngine(filePath, { page }, callback) {
    const file = fs.readFileSync(filePath).toString();
    const root = `<div id='root' data-page=${JSON.stringify(page)}></div>`;
    const content = file.replace('@inertia', root);
    return callback(null, content);
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.engine('html', inertiaEngine);
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', './src/views'));
    app.setViewEngine('html');
    app.use(inertia_middleware_1.inertia);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map