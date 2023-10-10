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
}
