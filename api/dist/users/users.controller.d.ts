import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user-create.dto';
import { ReturnUserDto } from './dto/user-return.dto';
import { UserUpdateDto } from './dto/user-update.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<ReturnUserDto>;
    findUserById(id: string): Promise<ReturnUserDto>;
    listAllUsers(): Promise<{
        found: import("./user.entity").User[];
        message: string;
    }>;
    updateUser(updateUserDto: UserUpdateDto, id: string): Promise<import("./user.entity").User>;
    userDelete(id: string): Promise<{
        message: string;
    }>;
}
