"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Render = void 0;
const constants_1 = require("@nestjs/common/constants");
function Render() {
    return (target, key, descriptor) => {
        Reflect.defineMetadata(constants_1.RENDER_METADATA, 'app.html', descriptor.value);
        return descriptor;
    };
}
exports.Render = Render;
//# sourceMappingURL=inertia.decorator.js.map