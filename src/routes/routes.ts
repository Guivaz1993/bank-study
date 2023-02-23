import { Router } from "express";

const routes = Router();

routes.get("/", (_, res) => {
  return res.status(200).send("Hello world");
});

routes.get("/port", (_, res) => {
  return res.status(200).send("oi");
});

export default routes;
