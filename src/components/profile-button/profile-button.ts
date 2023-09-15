import Block from '../../core/Block';

interface IProps {
  onClick: () => void
}

export class ProfileButton extends Block {
  constructor(props: IProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => {
      }),
    };
  }

  protected render(): string {
    return (`
            <div class="profile-button-container" page="profile">
              Профиль
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                <path d="M1 9L5 5L1 1" stroke="#999999"/>
              </svg>
            </div>
    `);
  }
}
