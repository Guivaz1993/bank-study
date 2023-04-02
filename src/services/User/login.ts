import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../entity/user";

const secret = process.env.SECRET_TOKEN || "secret";

export default async function loginUserService(
  repository: any,
  data: User
): Promise<any> {
  const user = await repository.findFirst({
    where: { email: data.email },
  });
  if (!user) {
    throw new Error("Senha ou email incorreto");
  }

  const validatePassword = await bcrypt.compare(data.password, user.password);

  if (!validatePassword) {
    throw new Error("Senha ou email incorreto");
  }
  const token = jwt.sign({ id: user.id }, secret);

  const { password, ...userData } = user;

  return { ...userData, token };
}
