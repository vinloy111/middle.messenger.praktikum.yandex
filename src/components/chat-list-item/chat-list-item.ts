import Block from '../../core/Block';
import { Chat } from '../../models/chat.ts';
import { connectToChat } from '../../services/chat.ts';

interface IProps {
  classes: string,
  active: boolean;
  value: Chat;
  events: {
    click: () => void;
  };
  onClick: () => void
}

export class ChatListItem extends Block<IProps> {
  constructor(props: IProps) {
    super(props);
    this.props.events = {
      click: async () => {
        const { chats } = window.store.getState();
        const updatedChats = chats.map((chat) => {
          chat.active = chat.id === this.props.value.id;
          return chat;
        });

        window.store.set({ chats: [...updatedChats], activeChatId: this.props.value.id, activeChat: this.props.value });

        // Подключаемся к чату
        await connectToChat(this.props.value.id);
      },
    };
  }

  get preparedDate() {
    if (this.props.value?.lastMessage?.time) {
      const dateStr = this.props.value.lastMessage.time;
      const date = new Date(dateStr);

      const hours = date.getUTCHours().toString().padStart(2, '0');
      const minutes = date.getUTCMinutes().toString().padStart(2, '0');

      return `${hours}:${minutes}`;
    }

    return '';
  }

  /* eslint-disable max-len */
  protected render(): string {
    const {
      classes, value,
    } = this.props;

    return (`
            <div class="chat-list-item ${value.active ? 'chat-list-item_active' : ''} ${classes}">
               <div>
                  <img class="chat-list-item__img" src="${value.avatar}" alt="UserPhoto">
               </div>
               <div>
                 <div class="chat-list-item__name">
                  ${value.title}
                 </div>
                 <div class="chat-list-item__preview">
                  ${value.lastMessage ? value.lastMessage.content : 'Начните диалог'}
                 </div>
               </div>
               <div class="time-and-counter">
                 <div class="chat-list-item__time">
                  ${this.preparedDate}
                 </div>
                 {{#if value.unreadCount}}
                   <div class="chat-list-item__counter">
                    <span class="time-and-counter__count">${value.unreadCount}</span>
                   </div>
                 {{/if}}
               </div>
            </div>
        `);
  }
}
