import Block from '../../core/Block';
import { Validators } from '../../core';
import { User } from '../../models/user.ts';

interface IProps {
  validate: { [key: string]: () => string | null };
  user: User;
}

export class ProfileMainInfoEdit extends Block<IProps> {
  constructor(props: IProps) {
    super({
      validate: {
        login: Validators.login,
        name: Validators.name,
        email: Validators.email,
        phone: Validators.phone,
        required: Validators.required,
      },
      user: props.user,
    });
  }

  /* eslint-disable max-len */
  protected render(): string {
    const {
      email,
      login,
      firstName,
      secondName,
      displayName,
      phone,
    } = this.props?.user || {};
    return (`
          {{#> FormProfile}}
            <div class="profile-form__main-info main-info">
              <div class="main-info__container">
                  {{{ InputField value="${email || ''}" name="email" label="Почта" ref="email" validate=validate.email }}}
                  {{{ InputField value="${login || ''}" name="login" label="Login" ref="login" validate=validate.login }}}
                  {{{ InputField value="${firstName || ''}" name="first_name" label="Имя" ref="first_name" validate=validate.name }}}
                  {{{ InputField value="${secondName || ''}" name="second_name" label="Фамилия" ref="second_name" validate=validate.name }}}
                  {{{ InputField value="${displayName || ''}" name="display_name" label="Имя в чате" ref="display_name" validate=validate.required }}}
                  {{{ InputField value="${phone || ''}" name="phone" label="Телефон" ref="phone" validate=validate.phone }}}
              </div>
            </div>
          {{/ FormProfile}}
        `);
  }
}
