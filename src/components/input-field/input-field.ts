import Block from '../../core/Block';

export class InputField extends Block {
  constructor(props: any) {
    super({
      ...props,
      onBlur: () => this.validate(),
      onInput: () => this.onInput(),
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
      return false;
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
                        classes="input__element"
                        ref="input"
                        onBlur=onBlur
                        onInput=onInput
                        type="${this.props.type}"
                    }}}
                    <label for="first_name">{{ label }}</label>
                    <div class="input-container__border"></div>
                </label>
                {{{ ErrorLine error=error ref="errorLine"}}}
            </div>
        `);
  }
}
