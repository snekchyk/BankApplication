import { Router } from 'express'
import TransactionController from "../controllers/transaction.controller";

const transactionRouter = Router()

transactionRouter.post('/transaction', TransactionController.transaction)

export { transactionRouter }