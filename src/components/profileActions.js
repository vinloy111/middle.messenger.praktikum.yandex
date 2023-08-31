import handlebars from 'handlebars';
import link from './link.js';

const template = `
  <div class="profile-form__actions">
      <div class="profile-form__actions-container">
          <div>
              ${link({href: "/?page=login", text: "Изменить данные"})}
          </div>
          <div>
              ${link({href: "/?page=login", text: "Изменить пароль"})}
          </div>
          <div>
              ${link({href: "/?page=login", text: "Выйти"})}
          </div>
      </div>
  </div>
`

export default handlebars.compile(template);

