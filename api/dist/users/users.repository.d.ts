import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from './dto/user-create.dto';
export declare class UserRepository extends Repository<User> {
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findUsers(): Promise<User[]>;
}
