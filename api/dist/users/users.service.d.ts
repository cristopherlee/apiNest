import { UserRepository } from './users.repository';
import { CreateUserDto } from './dto/user-create.dto';
import { User } from './user.entity';
import { UserUpdateDto } from './dto/user-update.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: UserRepository);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findUserById(userId: string): Promise<User>;
    findUsers(): Promise<User[]>;
    updateUser(updateUserDto: UserUpdateDto, id: string): Promise<User>;
    userDelete(userId: string): Promise<void>;
}
