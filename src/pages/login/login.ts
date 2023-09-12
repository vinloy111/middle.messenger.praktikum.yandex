import Block from '../../core/Block';

export class LoginPage extends Block {
  constructor() {
    super({
      validate: {
        login: (value: string) => {
          if (value.length < 3 || value.length > 20) {
            return 'Длина логина должна быть от 3 до 20 символов';
          }

          const regex = /^(?![0-9]*$)[a-zA-Z0-9-_]+$/;
          if (!regex.test(value)) {
            return 'Неверный формат логина';
          }

          return '';
        },
        password: (value: string) => {
          if (value.length < 8 || value.length > 40) {
            return 'Длина пароля должна быть от 8 до 40 символов';
          }

          if (!/[A-Z]/.test(value)) {
            return 'Пароль должен содержать хотя бы одну заглавную букву';
          }

          if (!/[0-9]/.test(value)) {
            return 'Пароль должен содержать хотя бы одну цифру';
          }

          return '';
        },
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

  protected render(): string {
    return (`
            <div>
              {{{ MainNav }}}
              <div class="login-container">
                <h2 class="login-container__title">Вход</h2>
                  {{#> FormAuth}}
                      {{{ InputField label="Login" ref="login" validate=validate.login }}}
                      {{{ InputField type="password" label="Password" ref="password" validate=validate.password }}}
                      {{{ Button label="Sign in" type="primary" page="list" onClick=onLogin }}}
                      <div class="not-profile-link">
                        {{{ Link href="/?page=register" text="Нет аккаунта?" }}}
                      </div>
                  {{/FormAuth}}
              </div>
            </div>
        `);
  }
}
