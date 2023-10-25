import Block from '../../core/Block';
import { connect } from '../../utils/connect';

interface Props {
    isOpenDialogChat: boolean,
    onSave: () => void,
    onClose: () => void,
    error: string
}

export class DialogCreateChat extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  public getChatTitle() {
    return (this.refs.chatTitle as any).value();
  }

  public setError(error: string) {
    this.refs.errorLine.setProps({ error });
  }

  protected render(): string {
    return `
            {{#Dialog open=isOpenDialogChat}}
                <form method="dialog">
                    <h3>Создать новую переписку</h3>
                    {{{ InputField label="название чата" ref="chatTitle"}}}
                    {{{ ErrorLine error=error ref="errorLine"}}}
                    <div>
                        {{{ Button
                            label="создать"
                            type="primary"
                            onClick=onSave
                        }}}
                        {{{ Button
                            label="отменить"
                            type="link"
                            onClick=onClose
                        }}}
                    </div>
                </form>
            {{/Dialog}}
        `;
  }
}

export const withStoreDialogCreateChat = connect(
  (state) => ({ isOpenDialogChat: state.isOpenDialogChat }),
)(DialogCreateChat);
