import {RegistrationInputModel} from "../models/input/RegistrationInputModel";

class AuthService {
    async register(data: RegistrationInputModel) {
        return data
    }
}

export default new AuthService()