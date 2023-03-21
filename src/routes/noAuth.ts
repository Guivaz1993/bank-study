import { Router } from "express";

import { User } from "../entity/user";
const routes = Router();

routes.get("/", (_, res) => {
  const user = new User("nome", "email", "senha");

  console.log(user);
  return res
    .status(200)
    .json({ message: "Desejamos as boas vindas a Aplicação.", user });
});

routes.post("/signin", (_, res) => {
  return res.status(200).send("oi");
});

routes.post("/signup", (_, res) => {
  return res.status(200).send("oi");
});

export default routes;
