import { Router } from "express";
import { userInfo } from "os";
import userRouter from "./user.routes";

const routes = Router();

routes.use('/user', userRouter)


export default routes;