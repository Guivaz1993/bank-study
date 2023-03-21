import { Router } from "express";
import NoAuth from "./noAuth"

const routes = Router();

routes.use("/", NoAuth);


export default routes;
