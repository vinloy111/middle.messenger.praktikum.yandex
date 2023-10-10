import { User } from './user.ts';

export type LastMessage = {
  user: User,
  time: string,
  content: string
}
