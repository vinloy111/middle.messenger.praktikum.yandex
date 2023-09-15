import Block from '../../core/Block';

export class ChatPage extends Block {
  /* eslint-disable max-len */
  protected render(): string {
    return (`
            <div class="chat">
              <aside class="chat-list">
                <div class="chat-list__header">
                  {{{ ProfileButton }}}
                  {{{ SearchChatInputField }}}
                </div>
                <div class="chat-list__content">
                  <!--        Тут будет цикл и передаваться еще сообщение, пока просто статика так как я не знаю формата, названия полей и тд          -->
                  {{{ ChatListItem classes="chat-list__item" }}}
                  {{{ ChatListItem classes="chat-list__item" }}}
                  {{{ ChatListItem classes="chat-list__item" }}}
                  {{{ ChatListItem classes="chat-list__item" active=true }}}
                  {{{ ChatListItem classes="chat-list__item" }}}
                </div>
              </aside>
              <section class="chat__container">
                 {{{ ChatHeader }}}
                 <div class="chat__body">
                    {{{ ChatMessage isMessageTo=true message="Круто!" }}}
                    {{{ ChatMessage isMessageTo=false message="Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптир" }}}
                 </div>
                 <div class="chat__footer">
                    {{{ AttachInput }}}
                    {{{ Input classes="chat__input" placeholder="Сообщение" }}}
                    {{{ SendButton }}}
                 </div>
              </section>
            </div>
        `);
  }
}
