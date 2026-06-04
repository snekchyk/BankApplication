import prisma from '../db.js'
import {Users} from "@prisma/client";
import {UserViewModel} from "../models/view/UserViewModel.js";


class UserQueryRepository {
    async isEmailAvailable(email: string): Promise<boolean> {
        const isAvailable = await prisma.users.findUnique({
            where: {
                email: email
            }
        })

        return !!isAvailable
    }

    async isUsernameAvailable(username: string): Promise<boolean> {
        const isAvailable = await prisma.users.findUnique({
            where: {
                username: username
            }
        })

        return !!isAvailable
    }

    async findUserByEmail(email: string): Promise<UserViewModel | null> {
        return prisma.users.findUnique({
            where: { email },
            select: {
                firstName: true,
                lastName: true,
                email: true,
                age: true
            }
        })
    }
}

export default new UserQueryRepository()