import ChatApi from '../api/chat';
import { transformChats } from '../utils/apiTransformers';
import { webSocketService } from './chat-socket.ts';

const chatApi = new ChatApi();

const getChats = async () => {
  const responseChat = await chatApi.getChats();
  if (responseChat.status !== 200) {
    throw Error(responseChat.response.reason);
  }

  return transformChats(JSON.parse(responseChat.response));
};

const createChat = async (title: string) => {
  const response = await chatApi.create({ title });
  if (response.status !== 200) {
    throw Error(response.response.reason);
  }

  const responseChat = await chatApi.getChats();
  if (responseChat.status !== 200) {
    throw Error(responseChat.response.reason);
  }

  const chats = await getChats();
  window.store.set({ chats });
};

const connectToChat = async (chatId: number) => {
  const token = await chatApi.getToken(chatId);
  const userId = window.store.getState().user?.id;
  const wsUrl = `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${JSON.parse(token.response).token}`;

  webSocketService.connect(wsUrl);
};

const addUser = async (userId: number) => {
  const chatId = window.store.getState().activeChatId;
  if (!chatId) {
    return;
  }

  const response = await chatApi.addUser(userId, +chatId);
  if (response.status !== 200) {
    throw Error(response.response.reason);
  }
};

const deleteUser = async (userId: number) => {
  const chatId = window.store.getState().activeChatId;
  if (!chatId || !userId) {
    return;
  }

  const response = await chatApi.deleteUser(+userId, +chatId);
  if (response.status !== 200) {
    throw Error(response.response.reason);
  }

  const chats = await getChats();
  window.store.set({ chats, activeChatId: null, activeChat: null });
};

export {
  createChat,
  getChats,
  connectToChat,
  addUser,
  deleteUser,
};
