import bcrypt from 'bcrypt'
import {RegistrationInputModel, RegisterSchema} from "../models/input/RegistrationInputModel.js";
import UserQueryRepository from "../repositories/user.query.repository.js";
import UserController from "../controllers/user.controller.js";
import UserRepository from "../repositories/user.repository.js";
import {LoginInputModel, LoginSchema} from "../models/input/LoginInputModel.js";
import JwtService from "../infrastructure/jwt.service.js";

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

    async login(data: LoginInputModel) {
        const validatedData = LoginSchema.parse(data)

        console.log(validatedData)

        const user = await UserQueryRepository.findFullUserByUsername(validatedData.username)

        if (!user) {
            throw new Error('Invalid username or password2')
        }

        const isPasswordCorrect = await bcrypt.compare(data.password, user.password)

        if (!isPasswordCorrect) {
            throw new Error('Invalid username or password1')
        }

        const token = await JwtService.generate(user)

        const payload = await UserQueryRepository.findUserByUsername(validatedData.username)
        if (!payload) {
            throw new Error('Invalid username or password')
        }

        return {
            accessToken: token,
            user: payload
        }

    }
}

export default new AuthService()