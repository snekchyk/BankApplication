import {UserViewModel} from "../models/view/UserViewModel.js";
import UserRepository from "../repositories/user.repository.js";
import UserQueryRepository from "../repositories/user.query.repository.js";

class UserService {
    async getUserById(userId: string): Promise<UserViewModel> {
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
}

export default new UserService()