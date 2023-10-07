import { Route } from './Route.ts';
import Block from './Block.ts';

export class Router {
  private static __instance: Router | null = null;

  private routes: Route[];

  private history: History;

  private _currentRoute: Route | null;

  private _rootQuery: string;

  constructor(rootQuery: string) {
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
  }

  public static getInstance(rootQuery: string): Router {
    if (!this.__instance) {
      this.__instance = new Router(rootQuery);
    }
    return this.__instance;
  }

  use(pathname: string, block: typeof Block<Record<string, any>>): Router {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };
    // Activate the current route when the router starts
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    // Only leave the current route if it's different from the new route
    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    if (route) {
      this._currentRoute = route;
      route.navigate(pathname);
    }
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
