import Block from '../../core/Block';
import { connect } from '../../utils/connect.ts';
import { Chat } from '../../models/chat.ts';
import { initChatPage } from '../../services/initApp.ts';
import { createChat } from '../../services/chat.ts';
import { User } from '../../models/user.ts';
import { webSocketService } from '../../services/chat-socket.ts';

interface IProps {
  openDialog: () => void;
  closeDialog: () => void;
  onSave: () => void;
  chats: Chat[];
  activeChatId: number | null;
  activeChat: Chat | null;
  user: User;
  sendMessage: () => void;
}

export class ChatPage extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      openDialog: () => window.store.set({ isOpenDialogChat: true }),
      closeDialog: () => window.store.set({ isOpenDialogChat: false }),
      onSave: () => {
        const chatTitle = (this.refs.createChat as any).getChatTitle();
        if (!chatTitle) {
          return;
        }
        createChat(chatTitle)
          .then(() => window.store.set({ isOpenDialogChat: false }))
          .catch((error) => console.error(error));
      },
      sendMessage: () => this.sendMessage(),
    });

    initChatPage().catch((e) => console.error(e));
  }

  sendMessage() {
    const inputEl = this.refs.inputMessageRef.element as HTMLInputElement;
    const inputValue = (inputEl?.value || '').trim();

    if (inputValue) {
      webSocketService.sendMessage({ type: 'message', content: inputValue });
      inputEl.value = '';
    }
  }

  /* eslint-disable max-len */
  protected render(): string {
    return (`
            <div class="chat">
              <aside class="chat-list">
                <div class="chat-list__header">
                  {{{ ProfileButton }}}
                  {{{ Button type="primary" label="Создать переписку" onClick=openDialog}}}
                  {{{ DialogCreateChat onSave=onSave onClose=closeDialog ref="createChat"}}}
                  {{{ SearchChatInputField }}}
                </div>
                <div class="chat-list__content">
                  {{#chats}}
                    {{{ ChatListItem value=this classes="chat-list__item" }}}
                  {{/chats}}
                </div>
              </aside>
              {{#if activeChat}}
                <section class="chat__container">
                   {{{ ChatHeader value=activeChat }}}
                   {{{ ChatMessages userId=${this.props.user?.id} }}}
                   <div class="chat__footer">
                      {{{ AttachInput }}}
                      {{{ Input ref="inputMessageRef" name="message" classes="chat__input" placeholder="Сообщение" }}}
                      {{{ SendButton onClick=sendMessage }}}
                   </div>
                </section>
              {{/if}}
            </div>
        `);
  }
}

export default connect(({
  user, chats, activeChatId, activeChat,
}) => ({
  user, chats, activeChatId, activeChat,
}))(ChatPage);
