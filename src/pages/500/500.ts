import Block from '../../core/Block';

export class ServerErrorPage extends Block {
  protected render(): string {
    return (`
            <div class="error">
              <h1 class="error__status">500</h1>
              <p class="error__text">Мы уже фиксим</p>
              {{{ Link href="/?page=chat" text="Назад к чатам" }}}
            </div>
        `);
  }
}
