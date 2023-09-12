import Block from '../../core/Block';

interface IProps {
  type: string,
  id: string,
  name: string,
  label: string,
  page: string,
  onClick: () => void
}

export class Button extends Block {
  constructor(props: IProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => {
      }),
    };
  }

  protected render(): string {
    const {
      type,
      id,
      name,
      label,
      page,
    } = this.props as IProps;
    return (`
            <button
              ${id ? `page=${id}` : ''}
              ${name ? `name=${name}` : ''}
              ${type ? `type=${type}` : 'button'}
              class="button"
              ${page ? `page="${page}"` : ''}>
              ${label}
            </button>
    `);
  }
}
