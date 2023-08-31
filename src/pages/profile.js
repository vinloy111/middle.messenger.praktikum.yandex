import returnButton from '../components/returnButton.js';
import profileHeader from '../components/profileHeader.js';
import mainInfo from '../components/profileMainInfo.js';
import actions from '../components/profileActions.js';

const mainInfoOptions = [
        {label: 'Почта', value: 'pochta@yandex.ru'},
        {label: 'Логин', value: 'ivanivanov'},
        {label: 'Имя', value: 'Иван'},
        {label: 'Фамилия', value: 'Иванов'},
        {label: 'Имя в чате', value: 'Иван'},
        {label: 'Телефон', value: '+7 (909) 967 30 30'},
];

export default `
    <div class="profile">
        ${returnButton()}
        <section class="profile-form">
            <div class="profile-form__container">
                ${profileHeader({ name: 'Иван', imgSrc: 'https://sun6-23.userapi.com/s/v1/ig2/sGsKUhzhudJa1_c0unkJgCf0Paq5HlRE3uXo0x2PO1warPgfpMuKRzs794oobTqt61nWq-TS6ZgOV2uqWPy0449K.jpg?size=640x640&quality=95&crop=0,0,640,640&ava=1' })}
                ${mainInfo({items: mainInfoOptions})}
                ${actions()}
            </div>
        </section>
    </div>
`
