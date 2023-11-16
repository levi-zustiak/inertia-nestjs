"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InertiaService = void 0;
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
                return response.header('X-Inertia', 'true').send(page);
            }
            serverRender(response, 'app.html', { page });
        };
    }
    render(response, component, data) {
        console.log(response, component, data);
    }
}
exports.InertiaService = InertiaService;
//# sourceMappingURL=inertia.service.js.map