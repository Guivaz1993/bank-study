import { Prisma } from "@prisma/client";
import { User } from "../../entity/user";
import createUserService from "./create";
import listUserService from "./list";
import loginUserService from "./login";

export default class UserService {
  constructor(private userRepository: any) {}

  async create(data: Prisma.UserCreateInput) {
    return createUserService(this.userRepository, data);
  }

  async list() {
    return listUserService(this.userRepository);
  }

  async login(data: User) {
    return loginUserService(this.userRepository, data);
  }
}

export { createUserService, listUserService, loginUserService };
