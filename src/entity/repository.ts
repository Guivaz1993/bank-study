interface CreateInterfase {
  data: Object ;
}

interface FindInterfase {
  where: Object ;
}

export abstract class Repository {
  abstract create(data: CreateInterfase): Promise<any>;
  abstract findMany(): Promise<any[]>;
  abstract findFirst(where: FindInterfase): Promise<any[]>;
}
