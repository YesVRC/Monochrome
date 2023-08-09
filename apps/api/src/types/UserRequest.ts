import type {Request} from "express";
import {User} from "@prisma/client";

export interface UserRequest extends Request {
    user: User
}