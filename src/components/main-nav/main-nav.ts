import Block from '../../core/Block';

export class MainNav extends Block {
  protected render(): string {
    return (`
            <nav>
              <ul class="main-nav-ul">
                <li>{{{ Link href="/" text="Login" }}}</li>
                <li>{{{ Link href="/?page=register" text="Register" }}}</li>
                <li>{{{ Link href="/?page=chat" text="Chat" }}}</li>
                <li>{{{ Link href="/?page=profile" text="Profile" }}}</li>
                <li>{{{ Link href="/?page=404" text="404" }}}</li>
                <li>{{{ Link href="/?page=500" text="500" }}}</li>
              </ul>
            </nav>
        `);
  }
}
