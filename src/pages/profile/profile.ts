import Block from '../../core/Block';

interface IProps {
  editProfile: (e: Event) => void;
}

export class ProfilePage extends Block<IProps> {
  private editMode: boolean;

  constructor(props: IProps) {
    super({
      ...props,
      editProfile: (e: Event) => this.editProfile(e),
    });

    this.editMode = false;
  }

  editProfile(event: Event) {
    event.preventDefault();
    if (this.editMode) {
      const formRefs = this.refs?.profileMainInfo?.refs?.ProfileMainInfoEdit?.refs;
      if (formRefs) {
        const values = Object.entries(formRefs).reduce<Record<string, string>>((acc, [key, ref]) => {
          acc[key] = ref.value ? ref.value() : '';
          return acc;
        }, {});

        console.log(values);
      }
    }

    this.editMode = !this.editMode;
    this.refs.profileMainInfo.setProps({ editMode: this.editMode });
    this.refs.editProfile.setProps({ text: this.editMode ? 'Сохранить' : 'Изменить данные' });

    event.preventDefault();
  }

  /* eslint-disable max-len */
  protected render(): string {
    return (`
            <div class="profile">
                {{{ ReturnButton }}}
                <section class="profile-form">
                    <div class="profile-form__container">
                      <div class="profile-form-header">
                          <div>
                              <img class="profile-form-header__img" src="https://sun6-23.userapi.com/s/v1/ig2/sGsKUhzhudJa1_c0unkJgCf0Paq5HlRE3uXo0x2PO1warPgfpMuKRzs794oobTqt61nWq-TS6ZgOV2uqWPy0449K.jpg?size=640x640&quality=95&crop=0,0,640,640&ava=1" alt="profile image">
                              <div class="profile-form-header__name">Andrew</div>
                          </div>
                      </div>
                      {{{ ProfileMainInfo ref="profileMainInfo" editMode=false }}}
                      <div class="profile-form__actions">
                          <div class="profile-form__actions-container">
                              <div>
                                {{{ Link onClick=editProfile href="/?page=login" text="Изменить данные" ref="editProfile" }}}
                              </div>
                              <div>
                                {{{ Link href="/?page=login" text="Изменить пароль" }}}
                              </div>
                              <div>
                                {{{ Link href="/?page=login" text="Выйти" className="link_danger" }}}
                              </div>
                          </div>
                      </div>
                    </div>
                </section>
            </div>
        `);
  }
}
