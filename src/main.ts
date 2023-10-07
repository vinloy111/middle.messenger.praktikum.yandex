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
} from './components';
import * as Pages from './pages';
import { registerComponent } from './core/resgiterComponent';
import Block from './core/Block.ts';
import { Router } from './core/Router.ts';

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
router
  .use('/login', Pages.LoginPage)
  .use('/register', Pages.RegisterPage)
  .use('/chat', Pages.ChatPage)
  .use('/profile', Pages.ProfilePage)
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
