// import axios from 'axios';

type Page = any;
type PageResolver = any;
type PageHandler = any;

// const api = axios.create({
//   baseURL: 'http://localhost:3001',
//   timeout: 1000,
//   withCredentials: true,
// });

export class Router {
  protected page!: Page;
  protected resolveComponent!: PageHandler;
  protected swapComponent!: PageHandler;

  public init(
    initialPage: Page,
    resolveComponent: PageResolver,
    swapComponent: PageHandler,
  ) {
    this.page = initialPage;
    this.resolveComponent = resolveComponent;
    this.swapComponent = swapComponent;
  }

  public async get(href: string) {
    // const response = await api.get(href);
    // const pageResponse = response.data;
  }
}

export const router = new Router();
