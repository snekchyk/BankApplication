import { Router } from 'express'
import {authRouter} from "./auth.router.js";
import {adminRouter} from "./admin.router.js";
import {userRouter} from "./user.router.js";
import {transactionRouter} from "./transaction.router.js";

const router = Router()

router.use('/auth', authRouter)
router.use('/admin', adminRouter)
router.use('/me', userRouter)
router.use('/transaction', transactionRouter)

export { router }