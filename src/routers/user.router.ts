import { Router } from 'express'

const userRouter = Router()

userRouter.get('/me', usersController.meInfo)

export { userRouter }