import Block from '../../core/Block';
import { connect } from '../../utils/connect';

interface Props {
    isOpenDialogDeleteUser: boolean,
    onSave: () => void,
    onClose: () => void,
    error: string
}

export class DialogDeleteUser extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  public getUserId() {
    return (this.refs.userId as any).value();
  }

  public setError(error: string) {
    this.refs.errorLine.setProps({ error });
  }

  protected render(): string {
    return `
            {{#Dialog open=isOpenDialogDeleteUser}}
                <form method="dialog">
                    <h3>Убрать пользователя из чата</h3>
                    {{{ InputField label="Идентификатор пользователя" ref="userId"}}}
                    {{{ ErrorLine error=error ref="errorLine"}}}
                    <div>
                        {{{ Button
                            label="Убрать"
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

export const withStoreDialogDeleteUser = connect(
  (state) => ({ isOpenDialogDeleteUser: state.isOpenDialogDeleteUser }),
)(DialogDeleteUser);
