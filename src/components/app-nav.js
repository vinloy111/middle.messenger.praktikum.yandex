import handlebars from 'handlebars';

const template =  `
  <nav>
    <ul>
        {{#each links}}
            <li>
                {{{ this }}}
            </li>
        {{/each}}
    </ul>
  </nav>
`

export default handlebars.compile(template);
