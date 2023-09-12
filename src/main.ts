import './styles/style.scss';
import handlebars from 'handlebars';
import loginPage from './pages/login.ts';
import registerPage from './pages/register.ts';
import notFoundPage from './pages/404.ts';
import serverErrorPage from './pages/500.ts';
import chatPage from './pages/chat.ts';
import profilePage from './pages/profile.ts';

const routes = {
  login: loginPage,
  register: registerPage,
  404: notFoundPage,
  500: serverErrorPage,
  chat: chatPage,
  profile: profilePage,
};

function handleRouting() {
  // Использую queryParams так как netlify умееть только dist запускать у себя
  // и соответственно маршруты другие нельзя в нем указать по примеру /register, /profile etc.
  const queryParams = new URLSearchParams(window.location.search);
  const page: string = queryParams.get('page') as any;

  const main: Element = document.querySelector('#app') as any;

  // @ts-ignore
  const template = routes[page];

  if (template) {
    main.innerHTML = handlebars.compile(template)({});
  } else if (window.location.pathname === '/') {
    main.innerHTML = handlebars.compile(loginPage)({});
  } else {
    main.innerHTML = handlebars.compile(notFoundPage)({});
  }
}

window.addEventListener('load', handleRouting);
window.addEventListener('popstate', handleRouting);
