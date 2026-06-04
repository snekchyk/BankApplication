import bcrypt from 'bcrypt'
import {RegistrationInputModel, RegisterSchema} from "../models/input/RegistrationInputModel.js";
import UserQueryRepository from "../repositories/user.query.repository.js";
import UserController from "../controllers/user.controller.js";
import UserRepository from "../repositories/user.repository.js";

class AuthService {
    async register(data: RegistrationInputModel) {
        const validatedData = RegisterSchema.parse(data)

        const isEmailAvailable = await UserQueryRepository.isEmailAvailable(validatedData.email)
        const isUsernameAvailable = await UserQueryRepository.isUsernameAvailable(validatedData.username)

        if (isEmailAvailable) {
            throw new Error('This email is already taken')
        }
        if (isUsernameAvailable) {
            throw new Error('This name is already taken')
        }

        const passwordSalt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(data.password, passwordSalt)

        const newUser = {
            username: validatedData.username,
            firstName: validatedData.firstName,
            lastName: validatedData.lastName,
            password: hashedPassword,
            email: validatedData.email,
            age: validatedData.age,
        }

        await UserRepository.save(newUser)

        const user = UserQueryRepository.findUserByEmail(validatedData.email)

        if (!user) {
            throw new Error('User not found')
        }

        return user

    }
}

export default new AuthService()