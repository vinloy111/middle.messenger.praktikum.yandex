import handlebars from 'handlebars';

// language='handlebars'
const template = `
    <a href="{{href}}" class="link {{className}}"
        {{#if target}} target="{{target}}"{{/if}}
        {{#if rel}} rel="{{rel}}"{{/if}}>
        {{text}}
    </a>
`;

export default handlebars.compile(template);
