import { Request } from "express";
import { User } from "./user";

export interface RequestAPI extends Request{
  user:any
}