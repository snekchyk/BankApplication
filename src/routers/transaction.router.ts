import { Router } from 'express'

const transactionRouter = Router()

transactionRouter.post('/transaction', transactionController.transaction)

export { transactionRouter }