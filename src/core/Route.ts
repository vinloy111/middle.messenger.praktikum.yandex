import Block from './Block.ts';
import renderDOM from '../utils/render.ts';

export class Route {
  private _pathname: string;

  private _blockClass: typeof Block<Record<string, any>>;

  private _block: Block | null;

  private _props: { rootQuery: string };

  constructor(pathname: string, view: typeof Block<Record<string, any>>, props: { rootQuery: string }) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
      renderDOM(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}
