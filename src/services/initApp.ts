import { getUser } from './auth';
import { getChats } from './chat';

const initApp = async () => {
  let me = null;
  try {
    me = await getUser();
  } catch (error) {
    window.router.go(window.location.pathname === '/sign-up' ? '/sign-up' : '/');
    return;
  }

  const chats = await getChats();
  window.store.set({ user: me, chats });
  const isLoginOrRegister = window.location.pathname === '/sign-up' || window.location.pathname === '/';
  if (isLoginOrRegister) {
    window.router.go('/messenger');
  }
};

const initChatPage = async () => {
  const chats = await getChats();
  window.store.set({ chats });
};

const initProfilePage = async () => {
  const user = await getUser();
  window.store.set({ user });
};

export {
  initApp,
  initChatPage,
  initProfilePage,
};
