import { Request, Response } from 'express'

class TransactionController {
    transaction(req: Request, res: Response) {
        res.sendStatus(200)
    }
}

export default new TransactionController()