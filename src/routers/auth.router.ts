import { Router } from 'express'
import AuthController from "../controllers/auth.controller.js";

const authRouter = Router()

authRouter.post('/reg', AuthController.register)
authRouter.post('/log', AuthController.login)

export { authRouter }