import './styles/style.scss';
import handlebars from 'handlebars';
import loginPage from './parials/login.js'
import registerPage from './parials/register.js';
import notFoundPage from './parials/404.js';
import serverErrorPage from './parials/500.js';
import chatPage from './parials/chat.js';
import profilePage from './parials/profile.js';

const routes = {
  'login': loginPage,
  'register': registerPage,
  '404': notFoundPage,
  '500': serverErrorPage,
  'chat': chatPage,
  'profile': profilePage
};

function handleRouting() {
  // Использую queryParams так как netlify умееть только dist запускать у себя
  // и соответственно маршруты другие нельзя в нем указать по примеру /register, /profile etc.
  const queryParams = new URLSearchParams(window.location.search);
  const page = queryParams.get('page');

  const main = document.querySelector('#app');

  const template = routes[page];

  if (template) {
    main.innerHTML = handlebars.compile(template)();
  } else if(window.location.pathname === '/') {
    main.innerHTML = handlebars.compile(loginPage)();
  }else {
    main.innerHTML = handlebars.compile(notFoundPage)();
  }
}

window.addEventListener('load', handleRouting);
window.addEventListener('popstate', handleRouting);