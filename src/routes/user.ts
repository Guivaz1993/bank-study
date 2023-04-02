import { Router } from "express";
import { listUser } from "../controllers/user";
import tokenVerify from "../middlewares/tokenVerify";

const routes = Router();

routes.use(tokenVerify)
routes.get("/", listUser);

export default routes;