import { Repository } from "../../entity/repository";
import { User } from "../../entity/user";

export default async function listUserService(repository: any) {
  const list = await repository.findMany();

  return list.map((iten: User) => {
    const { password, ...itenData } = iten;
    return itenData;
  });
}
