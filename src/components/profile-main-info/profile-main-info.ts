import Block from '../../core/Block';
import { User } from '../../models/user.ts';

interface IProps {
  editMode: boolean;
  user: User;
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

    return editMode
      ? ('{{{ ProfileMainInfoEdit user=user ref="ProfileMainInfoEdit" }}}')
      : ('{{{ ProfileMainInfoStatic user=user ref="ProfileMainInfoStatic" }}}');
  }
}
