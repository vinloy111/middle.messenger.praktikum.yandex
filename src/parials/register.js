export default `
    <div class="register-container">
        <h2>Регистрация</h2>
        <!--   Временный   method="get" пока не обрабатываем формы  -->
        <form action="/chat" method="get">
            <div class="input-container">
                <div class="input-container__input">
                    <input type="text" id="first_name" name="first_name">
                    <label for="first_name">Имя</label>
                    <div class="input-container__border"></div>
                </div>
            </div>
            <div class="input-container">
                <div class="input-container__input">
                    <input type="text" id="second_name" name="second_name">
                    <label for="second_name">Фамилия</label>
                    <div class="input-container__border"></div>
                </div>
            </div>
            <div class="input-container">
                <div class="input-container__input">
                    <input type="text" id="login" name="login">
                    <label for="login">Логин</label>
                    <div class="input-container__border"></div>
                </div>
            </div>
            <div class="input-container">
                <div class="input-container__input">
                    <input type="email" id="email" name="email">
                    <label for="email">Почта</label>
                    <div class="input-container__border"></div>
                </div>
            </div>
            <div class="input-container">
                <div class="input-container__input">
                    <input type="text" id="phone" name="phone">
                    <label for="phone">Телефон</label>
                    <div class="input-container__border"></div>
                </div>
            </div>
            <div class="input-container">
                <div class="input-container__input">
                    <input type="password" id="password" name="password">
                    <label for="password">Пароль</label>
                    <div class="input-container__border"></div>
                </div>
            </div>
            <div class="input-container">
                <div class="input-container__input">
                    <input type="password" id="password_confirm" name="password_confirm">
                    <label for="password_confirm">Пароль (еще раз)</label>
                    <div class="input-container__border"></div>
                </div>
            </div>
            <button type="submit">Зарегистрироваться</button>
        </form>
        <div class="login-link">
            <a href="/" class="link">Войти</a>
        </div>
    </div>
`