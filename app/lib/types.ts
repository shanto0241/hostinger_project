
// Define the User interface to match your data structure
export interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    profileImage?: string;
    role: string;
    phone?:string;
    address?: string;
    isActive: boolean;
  }
  