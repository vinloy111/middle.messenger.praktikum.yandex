import input from '../components/input.ts';
import button from '../components/button.ts';
import link from '../components/link.ts';

const formOptions = [
  {
    type: 'text', id: 'first_name', name: 'first_name', label: 'Имя',
  },
  {
    type: 'text', id: 'second_name', name: 'second_name', label: 'Фамилия',
  },
  {
    type: 'text', id: 'login', name: 'login', label: 'Логин',
  },
  {
    type: 'email', id: 'email', name: 'email', label: 'Почта',
  },
  {
    type: 'text', id: 'phone', name: 'phone', label: 'Телефон',
  },
  {
    type: 'password', id: 'password', name: 'password', label: 'Пароль',
  },
  {
    type: 'password', id: 'password_confirm', name: 'password_confirm', label: 'Пароль (еще раз)',
  },
];

export default `
    <div class="register-container">
        <h2 class="register-container__title">Регистрация</h2>
        <!-- Пока что тут нету перехода, так как обработку формы еще не делали -->
        <form action="/?page=chat" method="post">
            ${formOptions.map((option) => input(option)).join('')}
            ${button({ type: 'submit', label: 'Зарегистрироваться' })}
        </form>
        <div class="login-link">
            ${link({ href: '/?page=login', text: 'Войти' })}
        </div>
    </div>
`;
