import { Repository } from "../../entity/repository";

export default async function listUserService(
  repository: any,
) {
  const list = await repository.findMany();

  return list;
}