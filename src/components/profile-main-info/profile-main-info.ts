import Block from '../../core/Block';

interface IProps {
  editMode: boolean;
}

export class ProfileMainInfo extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      editMode: false,
    });
  }

  protected render(): string {
    const { editMode } = this.props as IProps;
    return editMode ? ('{{{ ProfileMainInfoEdit ref="ProfileMainInfoEdit" }}}') : ('{{{ ProfileMainInfoStatic }}}');
  }
}
