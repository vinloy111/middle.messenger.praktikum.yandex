import Block from '../../core/Block';
import { User } from '../../models/user.ts';

interface IProps {
  user: User,
}

export class ProfileMainInfoStatic extends Block<IProps> {
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
            <div class="profile-form__main-info main-info">
              <div class="main-info__container">
                  <div class="main-info__item">
                    <div class="main-info__item-label">Почта</div>
                    <div class="main-info__item-value">${email || ''}</div>
                  </div>
                  <div class="main-info__item">
                    <div class="main-info__item-label">Логин</div>
                    <div class="main-info__item-value">${login || ''}</div>
                  </div>
                  <div class="main-info__item">
                    <div class="main-info__item-label">Имя</div>
                    <div class="main-info__item-value">${firstName || ''}</div>
                  </div>
                  <div class="main-info__item">
                    <div class="main-info__item-label">Фамилия</div>
                    <div class="main-info__item-value">${secondName || ''}</div>
                  </div>
                  <div class="main-info__item">
                    <div class="main-info__item-label">Имя в чате</div>
                    <div class="main-info__item-value">${displayName || ''}</div>
                  </div>
                  <div class="main-info__item">
                    <div class="main-info__item-label">Телефон</div>
                    <div class="main-info__item-value">${phone || ''}</div>
                  </div>
              </div>
            </div>
        `);
  }
}
