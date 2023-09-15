import Block from '../../core/Block';

interface IProps {
    onBlur: () => void;
    onInput: () => void;
    classes: string,
    placeholder: string,
}

export class Input extends Block {
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
    const { classes, placeholder, type } = this.props;
    return (`
            <input
                ${type ? `type="${type}"` : ''}
                class="${classes}"
                placeholder="${placeholder || ''}"
                ref="input"
            />
        `);
  }
}
