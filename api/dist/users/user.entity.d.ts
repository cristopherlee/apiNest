import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    id: string;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
