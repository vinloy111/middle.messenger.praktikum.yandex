import { User } from './user.ts';
import { Chat } from './chat.ts';
import { Message } from '../api/type.ts';

export type AppState = {
  error: string | null,
  user: User | null,
  isOpenDialogChat: boolean,
  isOpenDialogAddUser: boolean,
  chats: Chat[],
  activeChatId: number | null,
  activeChat: Chat | null,
  messages: Message[] | null,
}
