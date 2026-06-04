import prisma from '../db.js'
import { Prisma, Users } from "@prisma/client";

class UserRepository {
    async save(data: any) {
        await prisma.users.create({
            data: data
        })
    }
}

export default new UserRepository()