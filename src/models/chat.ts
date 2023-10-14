import { LastMessage } from './last-message.ts';

export type Chat = {
  id: number,
  title: string,
  // eslint-disable-next-line no-undef
  avatar: Nullable<string>,
  active: boolean,
  unreadCount: number,
  lastMessage: LastMessage | null
}
