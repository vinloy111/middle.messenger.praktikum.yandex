import Block from '../../core/Block';
import { Validators } from '../../core';

interface IProps {
  validate: { [key: string]: () => string | null };
}

export class ProfilePasswordEdit extends Block<IProps> {
  constructor() {
    super({
      validate: {
        password: Validators.password,
      },
    });
  }

  /* eslint-disable max-len */
  protected render(): string {
    return (`
          {{#> FormProfile}}
            <div class="profile-form__main-info main-info">
              <div class="main-info__container">
                {{{ InputField name="oldPassword" type="password" label="Старый пароль" ref="oldPassword" validate=validate.password }}}
                {{{ InputField name="newPassword" type="password" label="Новый пароль" ref="newPassword" validate=validate.password }}}
              </div>
            </div>
          {{/ FormProfile}}
        `);
  }
}
