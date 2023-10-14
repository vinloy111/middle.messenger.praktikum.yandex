import './styles/style.scss';
import Handlebars, { Template } from 'handlebars';
import {
  Button,
  Link,
  InputField,
  Input,
  ErrorLine,
  MainNav,
  ProfileButton,
  SearchChatInputField,
  ChatListItem,
  ChatHeader,
  ChatMessage,
  AttachInput,
  SendButton,
  ReturnButton,
  ProfileMainInfo,
  ProfileMainInfoStatic,
  ProfileMainInfoEdit,
  FormAuth,
  FormRegister,
  FormProfile,
  ProfilePasswordEdit,
  DialogCreateChat,
  Dialog,
  ChatMessages,
  DialogAddUser,
} from './components';
import * as Pages from './pages';
import { registerComponent } from './core/resgiterComponent';
import Block from './core/Block.ts';
import { Router } from './core/Router.ts';
import { Store } from './core/Store.ts';
import { AppState } from './models/app-state.ts';
import { initApp } from './services/initApp.ts';

declare global {
  interface Window {
    store: Store<AppState>;
    router: Router;
  }

  type Nullable<T> = T | null;
}

const initState: AppState = {
  error: null,
  user: null,
  isOpenDialogChat: false,
  chats: [],
  activeChat: null,
  activeChatId: null,
  messages: [],
  isOpenDialogAddUser: false,
};

window.store = new Store<AppState>(initState);

type ComponentMap = {
  [key: string]: typeof Block<Record<string, any>>;
}

type PartialMap = {
  [key: string]: Template;
}

const Components: ComponentMap = {
  Button,
  Link,
  InputField,
  Input,
  ErrorLine,
  MainNav,
  ProfileButton,
  SearchChatInputField,
  ChatListItem,
  ChatHeader,
  ChatMessage,
  AttachInput,
  SendButton,
  ReturnButton,
  ProfileMainInfo,
  ProfileMainInfoStatic,
  ProfileMainInfoEdit,
  ProfilePasswordEdit,
  DialogCreateChat,
  DialogAddUser,
  Dialog,
  ChatMessages,
};

Object.keys(Components).forEach((component) => {
  registerComponent(component, Components[component]);
});

const Partials: PartialMap = {
  FormAuth,
  FormRegister,
  FormProfile,
};

Object.keys(Partials).forEach((partial: string) => {
  Handlebars.registerPartial(partial, Partials[partial]);
});

const router = new Router('#app');
window.router = router;
router
  .use('/', Pages.LoginPage)
  .use('/sign-up', Pages.RegisterPage)
  .use('/messenger', Pages.ChatPage)
  .use('/settings', Pages.ProfilePage)
  .use('/404', Pages.NotFoundPage)
  .use('/500', Pages.ServerErrorPage);

router.start();

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const page = target.getAttribute('page');
  if (page) {
    router.go(page);
    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

document.addEventListener('DOMContentLoaded', () => initApp());
