import { Request, Response } from 'express'
import UserService from "../services/user.service.js";

class UserController {
    async meInfo(req: Request, res: Response) {
        const info = await UserService.meInfo(req.user.email)

        if (!info) {
            res.sendStatus(404)
            return
        }

        return info
    }
}

export default new UserController()