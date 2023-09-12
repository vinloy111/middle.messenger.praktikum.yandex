import handlebars from 'handlebars';

const template = `
<div class="profile-form__main-info main-info">
      <div class="main-info__container">
          {{#each items}}
            <div class="main-info__item">
              <div class="main-info__item-label">{{ this.label }}</div>
              <div class="main-info__item-value">{{ this.value }}</div>
            </div>
          {{/each}}
      </div>
</div>
`;

export default handlebars.compile(template);
