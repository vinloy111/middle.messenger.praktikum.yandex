import handlebars from 'handlebars';

// language='handlebars'
const template =  `
    <button 
        {{#if type}} type="{{type}}"{{/if}}
    >{{ label }}</button>
`;

export default handlebars.compile(template);
