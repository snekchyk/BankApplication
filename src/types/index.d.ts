import {UserViewModel} from "../models/view/UserViewModel.js";

export declare global {
    namespace Express {
        export interface Request {
            user: UserViewModel
        }
    }
}