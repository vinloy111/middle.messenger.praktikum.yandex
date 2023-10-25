import AuthApi from '../api/auth';
import { CreateUser } from '../models/user.ts';
import { LoginRequestData } from '../models/login-request-data.ts';
import { apiHasError } from '../utils/apiHasError';
import { transformUser } from '../utils/apiTransformers';

const authApi = new AuthApi();

const getUser = async () => {
  const responseUser = await authApi.me();
  if (apiHasError(responseUser)) {
    throw Error(responseUser.response.reason);
  }

  return transformUser(JSON.parse(responseUser.response));
};

const signin = async (data: LoginRequestData) => {
  const response = await authApi.login(data);
  if (apiHasError(response)) {
    throw Error(response.response.reason);
  }

  const me = await getUser();

  window.store.set({ user: me });
  window.router.go('/messenger');
};

const signup = async (data: CreateUser) => {
  const response = await authApi.create(data);
  if (response.status !== 200) {
    throw Error(response.response.reason);
  }

  const me = await getUser();
  window.store.set({ user: me });
  window.router.go('/messenger');
};

const logout = async () => {
  await authApi.logout();
  window.store.set({ user: null, chats: [] });
  window.router.go('/');
};

export {
  signin,
  signup,
  logout,
  getUser,
};
