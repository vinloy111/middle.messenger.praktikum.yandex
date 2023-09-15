import Block from '../../core/Block';
import { Validators } from '../../core';

export class ProfileMainInfoEdit extends Block {
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

  protected render(): string {
    return (`
          {{#> FormProfile}}
            <div class="profile-form__main-info main-info">
              <div class="main-info__container">
                  {{{ InputField label="Почта" ref="email" validate=validate.email }}}
                  {{{ InputField label="Login" ref="login" validate=validate.login }}}
                  {{{ InputField label="Имя" ref="first_name" validate=validate.name }}}
                  {{{ InputField label="Фамилия" ref="second_name" validate=validate.name }}}
                  {{{ InputField label="Имя в чате" ref="chat_name" validate=validate.required }}}
                  {{{ InputField label="Телефон" ref="phone" validate=validate.phone }}}
              </div>
            </div>
          {{/ FormProfile}}
        `);
  }
}
