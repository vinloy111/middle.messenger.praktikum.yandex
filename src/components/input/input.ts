import Block from '../../core/Block';

interface IProps {
    onBlur: () => void;
    onInput: () => void;
    classes: string,
    placeholder: string,
    type: string,
    name: string,
}

export class Input extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        blur: props.onBlur || (() => {}),
        input: props.onInput || (() => {}),
      },
    });
  }

  protected render(): string {
    const {
      classes, placeholder, type, name,
    } = this.props;
    return (`
            <input
                ${type ? `type="${type}"` : ''}
                class="${classes}"
                ${name ? `name="${name}"` : ''}
                placeholder="${placeholder || ''}"
                ref="input"
            />
        `);
  }
}
