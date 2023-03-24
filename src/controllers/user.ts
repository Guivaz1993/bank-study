import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { User } from "../entity/user";
import UserService from "../services/User/index";

const prisma = new PrismaClient();
const userService = new UserService(prisma.user);

async function createUser(req: Request, res: Response): Promise<any> {
  try {
    const newUser: Prisma.UserCreateInput = new User(req.body);

    const user = await userService.create(
      // const user= await prisma.user.create({data:
      newUser
      // }
    );

    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}

async function listUser(req: Request, res: Response): Promise<any> {
  try {
    const list = await userService.list();

    return res.status(200).json(list);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}

async function login(req: Request, res: Response): Promise<any> {
  try {
    const response = await userService.login(req.body);
    return res.status(200).json(response);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}

export { createUser, listUser, login };
