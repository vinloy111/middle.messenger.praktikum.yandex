import Block from '../../core/Block';

interface IProps {
  classes: string;
}

export class ChatHeader extends Block {
  /* eslint-disable max-len */
  protected render(): string {
    const { classes } = this.props as IProps;
    return (`
            <div class="chat-header ${classes || ''}">
              <div class="short-info">
                 <img class="short-info__img" src="https://sun9-53.userapi.com/impg/GSG0QIdqDRrloUaxPBkDAKU_BRfMbPNLAbDqHg/JhBhy-tzMSs.jpg?size=1400x900&quality=96&sign=4243f6ba4155905bec61e07ee30d8110&c_uniq_tag=P5Y0cKK0UhhjJKGbNCw0qMUrrif-LQhRhaSdALDMWN4&type=album" alt="UserPhoto">
                 <div class="short-info__name">Вадим</div>
              </div>
              <div class="chat-header__actions">
                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="16" viewBox="0 0 3 16" fill="none">
                <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
                <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
                <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
                </svg>
              </div>
             </div>
        `);
  }
}
