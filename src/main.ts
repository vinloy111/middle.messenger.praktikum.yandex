import './styles/style.scss';
import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import { registerComponent } from './core/resgiterComponent';

const pages: { [key: string]: any } = {
  login: Pages.LoginPage,
  register: Pages.RegisterPage,
  chat: Pages.ChatPage,
  profile: Pages.ProfilePage,
  404: Pages.NotFoundPage,
  500: Pages.ServerErrorPage,
};

const componentsToRegister = [
  'Button',
  'Link',
  'InputField',
  'Input',
  'ErrorLine',
  'MainNav',
  'ProfileButton',
  'SearchChatInputField',
  'ChatListItem',
  'ChatHeader',
  'ChatMessage',
  'AttachInput',
  'SendButton',
  'ReturnButton',
  'ProfileMainInfo',
  'ProfileMainInfoStatic',
  'ProfileMainInfoEdit',
];

componentsToRegister.forEach((component) => {
  // @ts-ignore
  registerComponent(component, Components[component]);
});

const partialsToRegister = ['FormAuth', 'FormRegister', 'FormProfile'];

partialsToRegister.forEach((partial) => {
  // @ts-ignore
  Handlebars.registerPartial(partial, Components[partial]);
});

function navigate(page: string) {
  const app = document.getElementById('app');

  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set('page', page);
  window.history.pushState({ page }, '', currentUrl.toString());

  // @ts-ignore
  const Component = pages[page];
  const component = new Component();

  if (app) {
    app.innerHTML = '';
  }
  app?.append(component.getContent()!);
}

document.addEventListener('click', (e) => {
  // @ts-ignore
  const page = e.target.getAttribute('page');
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
