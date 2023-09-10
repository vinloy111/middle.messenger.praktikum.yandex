import handlebars from 'handlebars';

const template = `
  <div class="profile-form-header">
    <div>
        <img class="profile-form-header__img" src="{{imgSrc}}" alt="profile image">
        <div class="profile-form-header__name">{{name}}</div>
    </div>
</div>
`;

export default handlebars.compile(template);
