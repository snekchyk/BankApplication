import { Request, Response } from 'express'

export type RequestWithBody<B> = Request<{}, {}, B>
export type RequestWithParams<P> = Request<P>
export type RequestWithQuery<Q> = Request<{}, {}, {}, Q>
