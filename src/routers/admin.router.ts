import { Router } from 'express'
import AdminController from "../controllers/admin.controller.js";

const adminRouter = Router()

adminRouter.get('/users', AdminController.getAllUsers)

export { adminRouter }
