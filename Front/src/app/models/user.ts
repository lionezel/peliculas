export interface UserRegister {
  name: string;
  age: number;
  email: string;
  uid: string;
  password: string;
  profile: 'usuario' | 'admin';
}
