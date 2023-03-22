import { PrismaClient, User } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

async function createUser(req: Request, res: Response): Promise<any> {
  const { name, email, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
}

export { createUser };
