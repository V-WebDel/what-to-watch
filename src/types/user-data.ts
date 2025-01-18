export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type User = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
};

export type UserAuth = Pick<User, 'email'> & { password: string };
