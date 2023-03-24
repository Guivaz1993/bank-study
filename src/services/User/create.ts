import { Prisma } from "@prisma/client";
import { Repository } from "../../entity/repository";
import bcrypt from "bcrypt";

export default async function createUserService(
  repository: any,
  data: Prisma.UserCreateInput
) {
  const encryptedPass = await bcrypt.hash(data.password, 10);
  
  const user = await repository.create({
    data: { ...data, password: encryptedPass },
  });

  return user;
}
