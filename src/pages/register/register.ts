import Block from '../../core/Block';
import { Validators } from '../../core';

export class RegisterPage extends Block {
  constructor() {
    super({
      validate: {
        login: Validators.login,
        password: Validators.password,
        name: Validators.name,
        email: Validators.email,
        phone: Validators.phone,
      },
      onRegister: (event: Event) => {
        event.preventDefault();

        const values = Object.entries(this.refs).reduce<Record<string, string>>((acc, [key, ref]) => {
          acc[key] = ref.value ? ref.value() : '';
          return acc;
        }, {});

        console.log(values);
      },
    });
  }

  /* eslint-disable max-len */
  protected render(): string {
    return (`
            <div>
              <div class="register-container">
                <h2 class="register-container__title">Регистрация</h2>
                  {{#> FormRegister}}
                      {{{ InputField name="first_name" label="Имя" ref="first_name" validate=validate.name }}}
                      {{{ InputField name="second_name" label="Фамилия" ref="second_name" validate=validate.name }}}
                      {{{ InputField name="login" label="Login" ref="login" validate=validate.login }}}
                      {{{ InputField name="email" label="Почта" ref="email" validate=validate.email }}}
                      {{{ InputField name="phone" label="Телефон" ref="phone" validate=validate.phone }}}
                      {{{ InputField name="password" type="password" label="Password" ref="password" validate=validate.password }}}
                      {{{ InputField
                          name="password_confirm" type="password" label="Пароль (еще раз)" ref="password_confirm" validate=validate.password
                      }}}
                      {{{ Button label="Зарегистрироваться" type="primary" page="chat" onClick=onRegister }}}
                      <div class="login-link">
                        {{{ Link href="/?page=login" text="Войти" }}}
                      </div>
                  {{/FormRegister}}
              </div>
            </div>
        `);
  }
}
