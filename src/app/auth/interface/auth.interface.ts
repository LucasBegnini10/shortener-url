export interface AuthInterface {
  user: {
    email: string;
    password: string;
  };
}

export interface AuthResponseInterface {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  };
}
