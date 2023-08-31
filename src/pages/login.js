import input from '../components/input.js';
import button from '../components/button.js';
import link from '../components/link.js';
import nav from '../components/app-nav.js';

const navOptions = {
  links: [
    link({href: "/", text: "Login"}),
    link({href: "/?page=register", text: "Register"}),
    link({href: "/?page=chat", text: "Chat"}),
    link({href: "/?page=profile", text: "Profile"}),
    link({href: "/?page=404", text: "404"}),
    link({href: "/?page=500", text: "500"})
  ]
};

const formOptions = [
  {type: 'text', id: 'login', name: 'login', label: 'Логин', error: 'Validation error'},
  {type: 'password', id: 'password', name: 'password', label: 'Пароль'},
];

export default `
    ${nav(navOptions)}
    <div class="login-container">
        <h2 class="login-container__title">Вход</h2>
        <!-- Пока что тут нету перехода, так как обработку формы еще не делали -->
        <form action="/?page=chat" method="post">
            ${ formOptions.map(option => input(option)).join('') }
            ${button({type: 'submit', label: 'Авторизоваться'})}
        </form>
        <div class="not-profile-link">
            ${link({href: "/?page=register", text: "Нет аккаунта?"})}
        </div>
    </div>
`
