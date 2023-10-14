import Block from '../../core/Block';

interface Props {
    open: boolean
}

export class Dialog extends Block<Props> {
  protected render(): string {
    // eslint-disable-next-line quotes
    return `<dialog class="dialog" {{#if open}}open{{/if}} ></dialog>`;
  }
}
