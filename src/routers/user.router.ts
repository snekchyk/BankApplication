import { Router } from 'express'
import UserController from "../controllers/user.controller.js";
const userRouter = Router()

userRouter.get('/me', UserController.meInfo)

export { userRouter }