import { Router } from 'express'
import {authRouter} from "./auth.router";
import {adminRouter} from "./admin.router";
import {userRouter} from "./user.router";
import {transactionRouter} from "./transaction.router";

const router = Router()

router.use('/auth', authRouter)
router.use('/admin', adminRouter)
router.use('/user', userRouter)
router.use('/transaction', transactionRouter)

export { router }