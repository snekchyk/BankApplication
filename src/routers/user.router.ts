import { Router } from 'express'
import UserController from "../controllers/user.controller.js";
import {authMiddleware} from "../middlewares/auth.middleware.js";
const userRouter = Router()

userRouter.get('/me', authMiddleware,  UserController.meInfo)

export { userRouter }