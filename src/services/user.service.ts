import {UserViewModel} from "../models/view/UserViewModel.js";
import UserRepository from "../repositories/user.repository.js";
import UserQueryRepository from "../repositories/user.query.repository.js";
import {Users} from "@prisma/client";
import bcrypt from "bcrypt";

class UserService {
    async getUserById(userId: string): Promise<Users> {
        const user = await UserQueryRepository.findUserById(userId)

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }
    async meInfo(email: string): Promise<UserViewModel> {
        const user = await UserQueryRepository.findUserByEmail(email)
        if (!user) {
            throw new Error('User not found')
        }
        return user
    }
    async update(id: string, data: {firstName: string, lastName: string, email: string, username: string}): Promise<UserViewModel> {
        return UserQueryRepository.update(id, data)
    }
    async delete(id: string) {
        return UserRepository.deleteById(id)
    }
    async update_password(email: string, password: string, old_password: string, new_password: string) {
        const isPasswordCorrect = await bcrypt.compare(old_password, password)
        if (!isPasswordCorrect) {
            throw new Error("Invalid password")
        }

        return UserRepository.update_password(email, new_password)
    }
}

export default new UserService()