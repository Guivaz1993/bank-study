import { Router } from "express";
import { createUser } from "../controllers/user";

const routes = Router();

routes.get("/", (_, res) => {

  return res
    .status(200)
    .json({ message: "Desejamos as boas vindas a Aplicação." });
});

routes.post("/signin", (_, res) => {
  return res.status(200).send("oi");
});

routes.post("/signup", createUser);

export default routes;
