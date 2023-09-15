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

  protected render(): string {
    return (`
            <div>
              <div class="register-container">
                <h2 class="register-container__title">Регистрация</h2>
                  {{#> FormRegister}}
                      {{{ InputField label="Имя" ref="first_name" validate=validate.name }}}
                      {{{ InputField label="Фамилия" ref="second_name" validate=validate.name }}}
                      {{{ InputField label="Login" ref="login" validate=validate.login }}}
                      {{{ InputField label="Почта" ref="email" validate=validate.email }}}
                      {{{ InputField label="Телефон" ref="phone" validate=validate.phone }}}
                      {{{ InputField type="password" label="Password" ref="password" validate=validate.password }}}
                      {{{ InputField
                          type="password" label="Пароль (еще раз)" ref="password_confirm" validate=validate.password
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
