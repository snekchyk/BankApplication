import {UserViewModel} from "../models/view/UserViewModel.js";
import {Users} from "@prisma/client";

export declare global {
    namespace Express {
        export interface Request {
            user: Users
        }
    }
}