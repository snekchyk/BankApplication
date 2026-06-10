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
                username: true,
                age: true
            }
        })
    }

    async findUserByUsername(username: string): Promise<UserViewModel | null> {
        return prisma.users.findUnique({
            where: { username },
            select: {
                firstName: true,
                lastName: true,
                email: true,
                username: true,
                age: true
            }
        })
    }

    async findFullUserByUsername(username: string): Promise<Users | null> {
        return prisma.users.findUnique({
            where: {
                username: username
            }
        })
    }

    async findUserById(id: string): Promise<UserViewModel | null> {
        return prisma.users.findUnique({
            where: {
                id: id
            }
        })
    }

    async update(id: string, data: {firstName: string, lastName: string, email: string, username: string}): Promise<UserViewModel> {
        return prisma.users.update({
            where: { id: id },
            data: data,
            select: {
                firstName: true,
                lastName: true,
                email: true,
                username: true,
                age: true
            }
        })
    }
}

export default new UserQueryRepository()