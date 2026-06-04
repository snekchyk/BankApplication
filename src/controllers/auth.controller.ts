import { Request, Response } from 'express'
import {RequestWithBody} from "../types.js";
import {RegistrationInputModel} from "../models/input/RegistrationInputModel.js";
import {UserViewModel} from "../models/view/UserViewModel.js";
import {LoginInputModel} from "../models/input/LoginInputModel.js";
import {UserViewAccessStringModel} from "../models/view/UserViewAccessStringModel.js";
import {UserViewErrorModel} from "../models/view/UserViewErrorModel.js"
import AuthService from "../services/auth.service.js";

class AuthController {
    async register(req: RequestWithBody<RegistrationInputModel>, res: Response<UserViewModel | UserViewErrorModel | null>) {
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