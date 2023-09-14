import Block from '../../core/Block';

interface IProps {
  onClick: () => void
}

export class SendButton extends Block {
  constructor(props: IProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => {
      }),
    };
  }

  protected render(): string {
    return (`
            <div class="send-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="14" fill="#3369F3"/>
              <rect x="8" y="13.2" width="11" height="1.6" fill="white"/>
              <path d="M15 9L19 14L15 19" stroke="white" stroke-width="1.6"/>
              </svg>
            </div>
    `);
  }
}
