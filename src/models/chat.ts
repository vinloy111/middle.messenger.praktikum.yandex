import { LastMessage } from './last-message.ts';

export type Chat = {
  id: number,
  title: string,
  // eslint-disable-next-line no-undef
  avatar: Nullable<string>,
  unreadCount: number,
  lastMessage: LastMessage | null
}
