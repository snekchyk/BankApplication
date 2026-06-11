import { Request, Response } from 'express'
import {Users} from "@prisma/client";
import {UserViewModel} from "./models/view/UserViewModel.js";

export type RequestWithBody<B> = Request<{}, {}, B>
export type RequestWithParams<P> = Request<P>
export type RequestWithQuery<Q> = Request<{}, {}, {}, Q>
export type RequestWithUser = Request & {user: UserViewModel}