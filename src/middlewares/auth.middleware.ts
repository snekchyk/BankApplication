import {Request, Response, NextFunction, Router} from 'express'
import JwtService from "../infrastructure/jwt.service.js";
import UserService from "../services/user.service.js";
import UserQueryRepository from "../repositories/user.query.repository.js";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return res.sendStatus(401)
    }

    const token = req.headers.authorization.split(' ')[1]
    let userId: string | null = null

    try {
        userId = await JwtService.getUserIdByToken(token as string)

        if(userId) {
            req.user = await UserService.getUserById(userId)

            return next()
        }
    } catch (err: any) {
        res.status(401).send({message: err.message})
    }

    res.sendStatus(401)
}