import { User } from './user.ts';
import { Chat } from './chat.ts';

export type AppState = {
  error: string | null,
  user: User | null,
  isOpenDialogChat: boolean,
  chats: Chat[]
}
