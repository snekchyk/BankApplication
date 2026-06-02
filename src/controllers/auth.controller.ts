import { Request, Response } from 'express'
import {RequestWithBody} from "../types";
import {RegistrationInputModel} from "../models/input/RegistrationInputModel";
import {UserViewModel} from "../models/view/UserViewModel";
import {LoginInputModel} from "../models/input/LoginInputModel";
import {UserViewAccessStringModel} from "../models/view/UserViewAccessStringModel";
import {UserViewErrorModel} from "../models/view/UserViewErrorModel"
import AuthService from "../services/auth.service";

class AuthController {
    async register(req: RequestWithBody<RegistrationInputModel>, res: Response<UserViewModel | UserViewErrorModel>) {
        try {
            const user = await AuthService.register(req.body)

            res.status(201).send(user)
        } catch(err: any) {
            res.status(400).json({ message: err.message})
        }
    }

    login(req: RequestWithBody<LoginInputModel>, res: Response<UserViewAccessStringModel>) {
        res.sendStatus(200)
    }
}

export default new AuthController()