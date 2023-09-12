import handlebars from 'handlebars';

const template = `
  <div class="input-container">
    <div class="input-container__input">
       <input type="{{type}}" id="{{id}}" name="{{ name }}">
       <label for="first_name">{{ label }}</label>
       <div class="input-container__border"></div>
    </div>
    {{#if error}}
        <div class="input-container__validation">{{ error }}</div>
    {{/if}}
  </div>
`;

export default handlebars.compile(template);
