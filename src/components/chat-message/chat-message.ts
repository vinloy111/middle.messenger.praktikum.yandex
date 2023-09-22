import Block from '../../core/Block';

interface IProps {
  classes: string,
  message: string,
  isMessageTo?: boolean;
}

export class ChatMessage extends Block<IProps> {
  /* eslint-disable max-len */
  protected render(): string {
    const { classes, message, isMessageTo } = this.props;

    return (`
            <div class="message-container ${isMessageTo ? 'message-container_to' : ''} ${classes || ''}">
              <div class="message-container__message">
                <div class="message__text">
                  ${message}
                </div>
              </div>
            </div>
        `);
  }
}
