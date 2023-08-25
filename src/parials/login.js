export default `
    <nav>
        <ul>
            <li><a href="/" class="link">Login</a></li>
            <li><a href="/register" class="link">Register</a></li>
            <li><a href="/chat" class="link">Chat</a></li>
            <li><a href="/profile" class="link">Profile</a></li>
            <li><a href="/404" class="link">404</a></li>
            <li><a href="/500" class="link">500</a></li>
        </ul>
    </nav>
    <div class="login-container">
        <h2>Вход</h2>
        <!--   Временный   method="get" пока не обрабатываем формы  -->
        <form action="/chat" method="get">
            <div class="input-container">
                <div class="input-container__input">
                    <input type="text" id="login" name="login">
                    <label for="login">Логин</label>
                    <div class="input-container__border"></div>
                </div>
                <div class="input-container__validation">Ошибка валидации</div>
            </div>
            <div class="input-container">
                <div class="input-container__input">
                    <input type="password" id="password" name="password">
                    <label for="password">Пароль</label>
                    <div class="input-container__border"></div>
                </div>
            </div>
            <button type="submit">Авторизоваться</button>
        </form>
        <div class="not-profile-link">
            <a href="/register" class="link">Нет аккаунта?</a>
        </div>
    </div>
`