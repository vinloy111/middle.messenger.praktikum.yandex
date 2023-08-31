import link from '../components/link.js';

export default `
    <div class="error">
        <h1 class="error__status">404</h1>
        <p class="error__text">Не туда попали</p>
        ${link({href: "/?page=chat", text: "Назад к чатам"})}
    </div>
`
