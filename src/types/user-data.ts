export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type User = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type UserAuth = Pick<User, 'email'> & { password: string };
