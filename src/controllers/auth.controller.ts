import { Request, Response } from 'express'

class AuthController {
    register(req: Request, res: Response) {
        res.sendStatus(200)
    }

    login(req: Request, res: Response) {
        res.sendStatus(200)
    }
}

export default new AuthController()