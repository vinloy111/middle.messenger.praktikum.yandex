import Block from '../../core/Block';

export class MainNav extends Block {
  protected render(): string {
    return (`
            <nav>
              <ul class="main-nav-ul">
                <li>{{{ Link href="/" text="Login" }}}</li>
                <li>{{{ Link href="/sign-up" text="Register" }}}</li>
                <li>{{{ Link href="/messenger" text="Chat" }}}</li>
                <li>{{{ Link href="/settings" text="Profile" }}}</li>
                <li>{{{ Link href="/404" text="404" }}}</li>
                <li>{{{ Link href="/500" text="500" }}}</li>
              </ul>
            </nav>
        `);
  }
}
