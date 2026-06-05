import { Request, Response } from 'express'
import { RequestWithBody } from "../types.js";
import { RegistrationInputModel } from "../models/input/RegistrationInputModel.js";
import { UserViewModel } from "../models/view/UserViewModel.js";
import { LoginInputModel } from "../models/input/LoginInputModel.js";
import { UserViewAccessStringModel } from "../models/view/UserViewAccessStringModel.js";
import { UserViewErrorModel } from "../models/view/UserViewErrorModel.js"
import AuthService from "../services/auth.service.js";
import { ZodError } from "zod";

class AuthController {
    async register(req: RequestWithBody<RegistrationInputModel>, res: Response<UserViewModel | any | null>) {
        try {
            const user = await AuthService.register(req.body)
            return res.status(201).json(user)
        } catch (err: unknown) {
            console.error("Registration error:", err)

            if (err instanceof ZodError) {
                const formattedErrors = err.issues.map(e => ({
                    field: e.path.join('.'),
                    message: e.message
                }));

                return res.status(400).json({
                    status: "error",
                    errors: formattedErrors
                });
            }

            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }

            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async login(req: RequestWithBody<LoginInputModel>, res: Response<UserViewAccessStringModel | any>) {
        try {
            const user = await AuthService.login(req.body)

            return res.status(200).json(user)
        } catch(err: any) {
            console.error("Login error:", err)

            if (err instanceof ZodError) {
                const formattedErrors = err.issues.map(e => ({
                    field: e.path.join('.'),
                    message: e.message
                }));

                return res.status(400).json({
                    status: "error",
                    errors: formattedErrors
                });
            }

            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }

            return res.status(500).json({ message: "Internal server error" });
        }
    }
}

export default new AuthController()