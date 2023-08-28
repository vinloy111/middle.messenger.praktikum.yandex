import './styles/style.scss';
import handlebars from 'handlebars';
import loginPage from './parials/login.js'
import registerPage from './parials/register.js';
import notFoundPage from './parials/404.js';
import serverErrorPage from './parials/500.js';
import chatPage from './parials/chat.js';
import profilePage from './parials/profile.js';

const routes = {
  '/': loginPage,
  '/register': registerPage,
  '/404': notFoundPage,
  '/500': serverErrorPage,
  '/chat': chatPage,
  '/profile': profilePage
};

function handleRouting() {
  // Удаляем начальный слэш
  const path = window.location.pathname;
  const main = document.querySelector('#app');

  console.log(path, routes[path]);

  const page = routes[path];

  if (page) {
    main.innerHTML = handlebars.compile(page)();

  } else {
    main.innerHTML = handlebars.compile(notFoundPage)();
  }
}

window.addEventListener('load', handleRouting);
window.addEventListener('popstate', handleRouting);