"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InertiaService = void 0;
const fs = require("fs");
class InertiaService {
    constructor() {
        this.initialized = false;
        this.rootView = 'app';
    }
    static init(server) {
        const self = new InertiaService();
        self.bindHttpServer(server);
        return self;
    }
    bindHttpServer(server) {
        if (this.initialized) {
            throw new Error('RenderService: already initialized');
        }
        this.initialized = true;
        const serverRender = server.render;
        server.render = (response, component, props) => {
            const req = response.req;
            const url = req.baseUrl + req.path;
            const page = {
                component,
                props,
                url,
            };
            if (response.req.header('X-Inertia')) {
                response.header('X-Inertia', true);
                return response.send(page);
            }
            serverRender(response, 'app.html', { page });
        };
    }
    render(response, component, data) {
        console.log(response, component, data);
    }
}
exports.InertiaService = InertiaService;
function inertiaEngine(filePath, { page }, callback) {
    const file = fs.readFileSync(filePath).toString();
    const root = `<div id='root' data-page=${page}></div>`;
    const content = file.replace('@inertia', root);
    return callback(null, content);
}
//# sourceMappingURL=inertia.service.js.map