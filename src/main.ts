import './styles/style.scss';
import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import { registerComponent } from './core/resgiterComponent';

const pages: { [key: string]: any } = {
  login: Pages.LoginPage,
  register: Pages.RegisterPage,
};

Handlebars.registerPartial('FormAuth', Components.FormAuth);
Handlebars.registerPartial('FormRegister', Components.FormRegister);

registerComponent('Button', Components.Button);
registerComponent('Link', Components.Link);
registerComponent('InputField', Components.InputField);
registerComponent('Input', Components.Input);
registerComponent('ErrorLine', Components.ErrorLine);
registerComponent('MainNav', Components.MainNav);

function navigate(page: string) {
  const app = document.getElementById('app');

  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set('page', page);
  window.history.pushState({ page }, '', currentUrl.toString());

  if (page === 'register') {
    const container = document.getElementById('app')!;
    container.innerHTML = Handlebars.compile(pages[page])({});
    return;
  }

  // @ts-ignore
  const Component = pages[page];
  const component = new Component();
  app?.append(component.getContent()!);
}

// document.addEventListener('DOMContentLoaded', () => navigate('login'));

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
  app?.append(component.getContent()!);
}

window.addEventListener('load', handleRouting);
window.addEventListener('popstate', handleRouting);
