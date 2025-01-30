export type UserRole = 'admin' | 'user' | 'student' | 'teacher';


export interface IUser {
    id?: number;
    email: string;
    name: string;
    role?: UserRole;
    mobile?: number;
    password?:string;
  }
  
  export interface ILoginCredentials {
    email: string;
    password: string;
  }