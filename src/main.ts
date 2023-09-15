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

const pages: { [key: string]: any } = {
  login: Pages.LoginPage,
  register: Pages.RegisterPage,
  chat: Pages.ChatPage,
  profile: Pages.ProfilePage,
  404: Pages.NotFoundPage,
  500: Pages.ServerErrorPage,
};

type ComponentMap = {
  [key: string]: typeof Block;
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

function navigate(page: string) {
  const app = document.getElementById('app');

  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set('page', page);
  window.history.pushState({ page }, '', currentUrl.toString());

  const Component = pages[page];
  const component = new Component();

  if (app) {
    app.innerHTML = '';
  }
  app?.append(component.getContent()!);
}

document.addEventListener('click', (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  const page = target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

function handleRouting() {
  // Использую queryParams так как netlify умееть только dist запускать у себя
  // и соответственно маршруты другие нельзя в нем указать по примеру /register, /profile etc.
  const queryParams = new URLSearchParams(window.location.search);
  let page: string = queryParams.get('page') as any;

  const app: Element = document.querySelector('#app') as any;

  if (!pages[page]) {
    page = window.location.pathname === '/' && !page ? 'login' : '404';
  }

  const Component = pages[page];
  const component = new Component();
  if (app) {
    app.innerHTML = '';
  }
  app?.append(component.getContent()!);
}

window.addEventListener('load', handleRouting);
window.addEventListener('popstate', handleRouting);
