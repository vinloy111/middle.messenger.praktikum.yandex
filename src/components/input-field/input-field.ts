import Block from '../../core/Block';

interface IProps {
  onBlur: () => boolean;
  onInput: () => void;
  name: string;
  type: string;
  value?: string;
  validate?: (value: string) => string | null;
}

export class InputField extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      onBlur: () => this.validate(),
      onInput: () => this.onInput(),
      name: props.name,
    });
  }

  onInput() {
    const element = this.refs.input.element as HTMLInputElement;
    if (element.value) {
      element.classList.add('is-value');
    } else {
      element.classList.remove('is-value');
    }
  }

  public value() {
    if (!this.validate()) {
      return null;
    }
    return (this.refs.input.element as HTMLInputElement).value;
  }

  private validate() {
    const { value } = (this.refs.input.element as HTMLInputElement);
    const error = this.props.validate?.(value);
    if (error) {
      this.refs.errorLine.setProps({ error });
      return false;
    }
    this.refs.errorLine.setProps({ error: undefined });
    return true;
  }

  protected render(): string {
    return (`
            <div class="input-container {{#if error}}input__error{{/if}}" >
                <label class="input-container__input">
                    {{{ Input
                        classes="input__element {{#if value }}is-value{{/if}}"
                        ref="input"
                        onBlur=onBlur
                        onInput=onInput
                        name=name
                        value=value
                        type="${this.props.type || 'text'}"
                    }}}
                    <label for="first_name">{{ label }}</label>
                    <div class="input-container__border"></div>
                </label>
                {{{ ErrorLine error=error ref="errorLine"}}}
            </div>
        `);
  }
}
