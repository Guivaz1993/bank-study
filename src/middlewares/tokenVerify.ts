import jwt from "jsonwebtoken";
// import UserService from "../services/User";
import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
// import { RequestAPI } from "../entity/request";

const secret = process.env.SECRET_TOKEN || "secret";

const prisma = new PrismaClient();

interface TokenPayload {
  id: string;
}

export default async function tokenVerify(
  req: any,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Usuário não autenticado, por favor faça novamente login.",
    });
  }

  const token = authorization?.replace("Bearer ", "").trim() || "token";
  try {
    const tokenPayload = jwt.verify(token, secret) as TokenPayload ;

    const userExists = await prisma.user.findFirst({
      where: { id: tokenPayload.id },
    });

    if (!userExists) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const { password, ...user } = userExists;

    req.user = user;
    next();
  } catch (error: any) {
    console.log(error.message)
    if (error.name === "TokenExpiredError") {
      return res.status(500).json({
        message: "Token expirado, por favor refaça sua requisição ou login.",
      });
    }
    return res.status(500).json({message:error.message});
  }
}
