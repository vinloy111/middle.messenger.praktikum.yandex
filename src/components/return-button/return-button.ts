import Block from '../../core/Block';

interface IProps {
  onClick: () => void,
  events: {
    click: () => void;
  }
}

export class ReturnButton extends Block<IProps> {
  constructor(props: IProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => {
        window.router.go('/messenger');
      }),
    };
  }

  protected render(): string {
    return (`
            <div class="return-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="14" transform="rotate(-180 14 14)" fill="#3369F3"/>
                  <rect x="20" y="14.8" width="11" height="1.6" transform="rotate(-180 20 14.8)" fill="white"/>
                  <path d="M13 19L9 14L13 9" stroke="white" stroke-width="1.6"/>
              </svg>
            </div>
    `);
  }
}
