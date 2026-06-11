import { Request, Response } from 'express'
import UserService from "../services/user.service.js";
import {RequestWithUser} from "../types.js";
import {UserViewModel} from "../models/view/UserViewModel.js";

class UserController {
    async information(req: RequestWithUser, res: Response<UserViewModel>) {
        const info = await UserService.meInfo(req.user.email)

        if (!info) {
            res.sendStatus(404)
            return
        }

        return res.status(200).send(info)
    }

    async update(req: RequestWithUser, res: Response<UserViewModel>) {
        const {firstName, lastName, email, username} = req.body
        const id = req.user.id

        const updatedUser = await UserService.update(id, {firstName, lastName, email, username})
        return res.status(200).send(updatedUser)
    }

    async delete(req: RequestWithUser, res: Response<UserViewModel>) {
        const id = req.user.id

        try {
            await UserService.delete(id)
        } catch (err){
            return res.sendStatus(400)
        }

        return res.sendStatus(204)
    }
}

export default new UserController()