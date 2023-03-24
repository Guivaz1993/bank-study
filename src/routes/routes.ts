import { Router } from "express";
import NoAuth from "./noAuth"
import User from "./user"

const routes = Router();

routes.use("/", NoAuth);
routes.use("/user", User);


export default routes;
