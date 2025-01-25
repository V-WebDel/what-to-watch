export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type User = {
  id: number;
  email: string;
  name: string;
  isPro: boolean;
  avatarUrl: string;
  token: string;
};

export type UserAuth = Pick<User, 'email'> & { password: string };
