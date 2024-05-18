export interface AuthInterface {
  user: {
    email: string;
    password: string;
  };
}

export interface AuthLoggedInInterface {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  } | null;
}

export interface AuthResponseInterface extends AuthLoggedInInterface {}
