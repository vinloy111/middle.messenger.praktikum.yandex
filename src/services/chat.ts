import ChatApi from '../api/chat';
import { transformChats } from '../utils/apiTransformers';

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

export {
  createChat,
  getChats,
};
