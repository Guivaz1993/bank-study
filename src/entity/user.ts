export interface UserInterface {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export class User {
  constructor(data:UserInterface) {
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }
  
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
