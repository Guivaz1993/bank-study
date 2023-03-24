import { Router } from "express";
import { listUser } from "../controllers/user";

const routes = Router();

routes.get("/", listUser);

export default routes;