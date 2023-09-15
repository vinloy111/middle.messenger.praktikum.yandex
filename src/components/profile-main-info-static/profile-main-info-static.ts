import Block from '../../core/Block';

export class ProfileMainInfoStatic extends Block {
  protected render(): string {
    return (`
            <div class="profile-form__main-info main-info">
              <div class="main-info__container">
                  <div class="main-info__item">
                    <div class="main-info__item-label">Почта</div>
                    <div class="main-info__item-value">pochta@yandex.ru</div>
                  </div>
                  <div class="main-info__item">
                    <div class="main-info__item-label">Логин</div>
                    <div class="main-info__item-value">ivanivanov</div>
                  </div>
                  <div class="main-info__item">
                    <div class="main-info__item-label">Имя</div>
                    <div class="main-info__item-value">Иван</div>
                  </div>
                  <div class="main-info__item">
                    <div class="main-info__item-label">Фамилия</div>
                    <div class="main-info__item-value">Иванов</div>
                  </div>
                  <div class="main-info__item">
                    <div class="main-info__item-label">Имя в чате</div>
                    <div class="main-info__item-value">Иван</div>
                  </div>
                  <div class="main-info__item">
                    <div class="main-info__item-label">Телефон</div>
                    <div class="main-info__item-value">+7 (909) 967 30 30</div>
                  </div>
              </div>
            </div>
        `);
  }
}
