import Block from '../../core/Block';
import { connect } from '../../utils/connect.ts';

interface IProps {
  messages: string,
  userId: number,
}

export class ChatMessages extends Block<IProps> {
  /* eslint-disable max-len */
  protected render(): string {
    return (`
            <div class="chat__body">
              {{#messages}}
                {{{ ChatMessage message=this.content messageUserId=this.user_id currentUserId=${this.props?.userId} }}}
              {{/messages}}
            </div>
        `);
  }
}

export default connect(({
  messages,
}) => ({
  messages,
}))(ChatMessages);
