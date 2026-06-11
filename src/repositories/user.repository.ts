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
    async update_password(email: string, password: string) {
        const updated_user = await prisma.users.update({
            where: {email: email},
            data: {
                password: password
            }
        })

        return updated_user.password
    }
}

export default new UserRepository()