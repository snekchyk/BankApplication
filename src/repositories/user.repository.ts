import prisma from '../db.js'
import { Prisma, Users } from "@prisma/client";

class UserRepository {
    async save(data: any) {
        await prisma.users.create({
            data: data
        })
    }
    async deleteById(id: string) {
        return prisma.users.delete({
            where: {id: id}
        })
    }
}

export default new UserRepository()