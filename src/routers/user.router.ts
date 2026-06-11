import { Router } from 'express'
import UserController from "../controllers/user.controller.js";
import {authMiddleware} from "../middlewares/auth.middleware.js";
const userRouter = Router()

userRouter.get('/info', authMiddleware,  UserController.information)
userRouter.patch('/update', authMiddleware, UserController.update)
userRouter.delete('/delete', authMiddleware, UserController.delete)
userRouter.patch('/update_password', authMiddleware, UserController.update_password)

export { userRouter }