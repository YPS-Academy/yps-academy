export type UserRole = 'admin' | 'user' | 'student' | 'teacher';


export interface IUser {
    id: number;
    email: string;
    name: string;
    role: UserRole;
  }
  
  export interface ILoginCredentials {
    email: string;
    password: string;
  }