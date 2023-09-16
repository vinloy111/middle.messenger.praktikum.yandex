import Block from '../../core/Block';
import { Validators } from '../../core';

interface IProps {
  validate: { [key: string]: () => string | null }
}

export class ProfileMainInfoEdit extends Block<IProps> {
  constructor() {
    super({
      validate: {
        login: Validators.login,
        name: Validators.name,
        email: Validators.email,
        phone: Validators.phone,
        required: Validators.required,
      },
    });
  }

  /* eslint-disable max-len */
  protected render(): string {
    return (`
          {{#> FormProfile}}
            <div class="profile-form__main-info main-info">
              <div class="main-info__container">
                  {{{ InputField name="email" label="Почта" ref="email" validate=validate.email }}}
                  {{{ InputField name="login" label="Login" ref="login" validate=validate.login }}}
                  {{{ InputField name="first_name" label="Имя" ref="first_name" validate=validate.name }}}
                  {{{ InputField name="second_name" label="Фамилия" ref="second_name" validate=validate.name }}}
                  {{{ InputField name="display_name" label="Имя в чате" ref="display_name" validate=validate.required }}}
                  {{{ InputField name="phone" label="Телефон" ref="phone" validate=validate.phone }}}
              </div>
            </div>
          {{/ FormProfile}}
        `);
  }
}
