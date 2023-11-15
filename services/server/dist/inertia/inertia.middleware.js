"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inertia = void 0;
function inertia(req, res, next) {
    res.set('Vary', 'X-Inertia');
    console.log(req);
    next();
}
exports.inertia = inertia;
//# sourceMappingURL=inertia.middleware.js.map