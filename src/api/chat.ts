import { HTTPTransport } from '../services/http-transport.ts';
import { CreateChat } from './type.ts';

const chatApi = new HTTPTransport('/chats');

export default class ChatApi {
  async create(data: CreateChat): Promise<XMLHttpRequest> {
    return chatApi.post('/', { data });
  }

  async getChats(): Promise<XMLHttpRequest> {
    return chatApi.get('');
  }

  async getToken(chatId: number): Promise<XMLHttpRequest> {
    return chatApi.post(`/token/${chatId}`);
  }

  async addUser(userId: number, chatId: number): Promise<XMLHttpRequest> {
    return chatApi.put('/users', { data: { users: [userId], chatId } });
  }

  async deleteUser(userId: number, chatId: number): Promise<XMLHttpRequest> {
    return chatApi.delete('/users', { data: { users: [userId], chatId } });
  }
}
