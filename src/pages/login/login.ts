import Block from '../../core/Block';
import { Validators } from '../../core';

export class LoginPage extends Block {
  constructor() {
    super({
      validate: {
        login: Validators.login,
        password: Validators.password,
      },
      onLogin: (event: Event) => {
        event.preventDefault();
        const login = this.refs.login.value ? this.refs.login.value() : '';
        const password = this.refs.password.value ? this.refs.password.value() : '';

        console.log({
          login,
          password,
        });
      },
    });
  }

  /* eslint-disable max-len */
  protected render(): string {
    return (`
            <div>
              {{{ MainNav }}}
              <div class="login-container">
                <h2 class="login-container__title">Вход</h2>
                  {{#> FormAuth}}
                      {{{ InputField name="login" label="Логин" ref="login" validate=validate.login }}}
                      {{{ InputField name="password" type="password" label="Пароль" ref="password" validate=validate.password }}}
                      {{{ Button label="Авторизоваться" type="primary" page="chat" onClick=onLogin }}}
                      <div class="not-profile-link">
                        {{{ Link href="/?page=register" text="Нет аккаунта?" }}}
                      </div>
                  {{/FormAuth}}
              </div>
            </div>
        `);
  }
}
