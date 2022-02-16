export interface User {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  userId: string;
}

export interface AuthenticationState {
  token: string | null;
  user: User | null;
}

export interface Resource {
  description: string;
  link: string;
  status: string;
  subject: string;
  title: string;
  _id: string;
}

export interface Subject {
  name: string;
  _id: string;
}
