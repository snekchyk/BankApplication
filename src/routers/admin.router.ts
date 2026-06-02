import { Router } from 'express'

const adminRouter = Router()

adminRouter.get('/users', adminController.getAllUsers)

export { adminRouter }
