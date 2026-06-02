import { Request, Response} from 'express'

class AdminController {
    getAllUsers(req: Request, res: Response) {
        res.sendStatus(200)
    }
}

export default new AdminController()