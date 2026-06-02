import { Router } from 'express'

const authRouter = Router()

authRouter.post('/reg', authController.register)
authRouter.post('/log', authController.login)

export { authRouter }