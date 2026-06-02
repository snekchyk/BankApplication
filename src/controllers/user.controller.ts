import { Request, Response } from 'express'

class UserController {
    meInfo(req: Request, res: Response) {
        res.sendStatus(200)
    }
}

export default new UserController()