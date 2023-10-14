import Block from '../../core/Block';
import { connect } from '../../utils/connect';

interface Props {
    isOpenDialogAddUser: boolean,
    onSave: () => void,
    onClose: () => void,
    error: string
}

export class DialogAddUser extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  public getChatTitle() {
    return (this.refs.userId as any).value();
  }

  public setError(error: string) {
    this.refs.errorLine.setProps({ error });
  }

  protected render(): string {
    return `
            {{#Dialog open=isOpenDialogAddUser}}
                <form method="dialog">
                    <h3>Добавить пользователя в чат</h3>
                    {{{ InputField label="Идентификатор пользователя" ref="userId"}}}
                    {{{ ErrorLine error=error ref="errorLine"}}}
                    <div>
                        {{{ Button
                            label="Добавить"
                            type="primary"
                            onClick=onSave
                        }}}
                        {{{ Button
                            label="Отменить"
                            type="link"
                            onClick=onClose
                        }}}
                    </div>
                </form>
            {{/Dialog}}
        `;
  }
}

export const withStoreDialogAddUser = connect(
  (state) => ({ isOpenDialogAddUser: state.isOpenDialogAddUser }),
)(DialogAddUser);
