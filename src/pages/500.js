import link from '../components/link.js';

export default `
    <div class="error">
        <h1 class="error__status">500</h1>
        <p class="error__text">Мы уже фиксим</p>
        ${link({href: "/?page=chat", text: "Назад к чатам"})}
    </div>
`;
