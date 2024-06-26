import {Roles} from "@/common/types/user/roles.types";

export type UserId = number;
export interface IUser {
    id: UserId;
    firstname: string;
    lastname: string;
    email?: string;
    phoneNumber: string;
    role: Roles
}

