import Block from '../../core/Block';

interface IProps {
  href: string,
  className: string,
  target: string,
  rel: string,
  text: string,
  onClick: (e: Event) => void
}

export class Link extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        click: props.onClick || ((e: Event) => {
          e.preventDefault();
          window.router.go(this.props.href);
        }),
      },
    });
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
              class="link ${className || ''}">
              ${text}
            </a>
        `);
  }
}
