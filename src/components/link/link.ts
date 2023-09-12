import Block from '../../core/Block';

interface IProps {
  href: string,
  className: string,
  target: string,
  rel: string,
  text: string,
  onClick: () => void
}

export class Link extends Block {
  constructor(props: IProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => {}),
    };
  }

  protected render(): string {
    const {
      href,
      className,
      target,
      rel,
      text,
    } = this.props;
    return (`
            <a
              ${href ? `href=${href}` : ''}
              ${target ? `target=${target}` : ''}
              ${rel ? `rel=${rel}` : ''}
              class="link ${className}">
              ${text}
            </a>
        `);
  }
}
