import Block from '../../core/Block';

interface IProps {
  classes: string,
  active: boolean;
}

export class ChatListItem extends Block<IProps> {
  /* eslint-disable max-len */
  protected render(): string {
    const { classes, active } = this.props;

    return (`
            <div class="chat-list-item ${active ? 'chat-list-item_active' : ''} ${classes}">
               <div>
                  <img class="chat-list-item__img" src="https://sun9-53.userapi.com/impg/GSG0QIdqDRrloUaxPBkDAKU_BRfMbPNLAbDqHg/JhBhy-tzMSs.jpg?size=1400x900&quality=96&sign=4243f6ba4155905bec61e07ee30d8110&c_uniq_tag=P5Y0cKK0UhhjJKGbNCw0qMUrrif-LQhRhaSdALDMWN4&type=album" alt="UserPhoto">
               </div>
               <div>
                 <div class="chat-list-item__name">
                  Андрей
                 </div>
                 <div class="chat-list-item__preview">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid autem beatae blanditiis consequatur consequuntur corporis delectus deserunt dolore doloremque eligendi enim est exercitationem facere harum officia quaerat repellat suscipit tempora unde velit, veritatis vero voluptatibus! A aliquam aliquid animi aperiam commodi consequatur consequuntur dicta distinctio eius eos excepturi fugiat ipsam laboriosam laudantium libero magnam mollitia natus necessitatibus nihil nobis non nostrum, omnis perspiciatis porro possimus quidem quos reiciendis, repellat totam veritatis! Ad alias beatae consequatur deleniti, exercitationem id? Ab blanditiis fuga perspiciatis reprehenderit similique. Alias at delectus deleniti dignissimos dolorem, error eveniet facilis magni maxime natus porro possimus quaerat qui quidem quisquam quos rerum sed voluptas? Aliquid aperiam aut culpa distinctio doloribus ea eius eligendi est, expedita harum ipsum iusto, labore minima minus mollitia nam neque nesciunt nisi nulla odit quaerat quasi qui quibusdam quidem quo sequi sit, tempore ut voluptas voluptatum. Accusantium aliquam architecto consectetur consequuntur deleniti deserunt dolorum earum eligendi eos error est eveniet fuga in laboriosam laudantium maiores minima nostrum odio omnis optio pariatur perspiciatis possimus quaerat qui quis quod ratione repellat sequi soluta, tenetur totam ullam unde vel vero vitae voluptatem voluptates? Aperiam consectetur cupiditate illum officiis optio? Debitis deleniti illum laborum nemo quaerat velit.
                 </div>
               </div>
               <div class="time-and-counter">
                 <div class="chat-list-item__time">
                  10:49
                 </div>
                 <div class="chat-list-item__counter">
                  <span class="time-and-counter__count">2</span>
                 </div>
               </div>
            </div>
        `);
  }
}
