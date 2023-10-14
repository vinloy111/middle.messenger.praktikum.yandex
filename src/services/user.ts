import UserApi from '../api/user.ts';
import { apiHasError } from '../utils/apiHasError';
import { getUser } from './auth.ts';
import { Avatar, PasswordDTO, ProfileDTO } from '../api/type.ts';

const userApi = new UserApi();

const profile = async (data: ProfileDTO) => {
  const response = await userApi.profile(data);
  if (apiHasError(response)) {
    throw Error(response.response.reason);
  }

  const me = await getUser();
  window.store.set({ user: me });
};

const avatar = async (data: Avatar) => {
  const response = await userApi.avatar(data);
  if (apiHasError(response)) {
    throw Error(response.response.reason);
  }

  const me = await getUser();
  window.store.set({ user: me });
};

const password = async (data: PasswordDTO) => {
  const response = await userApi.password(data);
  if (apiHasError(response)) {
    throw Error(response.response.reason);
  }

  const me = await getUser();
  window.store.set({ user: me });
};

export {
  profile,
  avatar,
  password,
};
