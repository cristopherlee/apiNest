/* eslint-disable prettier/prettier */
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { CreateUserDto } from './dto/user-create.dto';
import { User } from './user.entity';
import { UserUpdateDto } from './dto/user-update.dto';

/**
 * This class is responsible for validating the bring between
 * what is requested and what is returned
 */
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  /**
   * This method is responsible for creating a user
   * @param createUserDto
   * @returns user object json and message success
   */
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(createUserDto);
  }

  /**
   * This method is responsible for searching the user by id
   * @param userId
   * @returns user object json
   */
  async findUserById(userId: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne(userId, {
        select: ['email', 'name', 'id'],
      });

      if (!user) throw new NotFoundException('Usuário não encontrado');

      return user;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * This method is responsible for find all Users
   * @returns user object json
   */
  async findUsers(): Promise<User[]> {
    const users = await this.userRepository.findUsers();
    return users;
  }

  /**
   * Responsible for user update
   * @param updateUserDto
   * @param id
   * @returns message success
   */
  async updateUser(updateUserDto: UserUpdateDto, id: string): Promise<User> {
    // TODO: Neste caso, o  update poderia estar no repositorio, controlando a validação do item.
    // Dessa forma, não posso executar os testes unitários.
    const user = await this.findUserById(id);

    const { name, email } = updateUserDto;
    user.name = name ? name : user.name;
    user.email = email ? email : user.email;

    try {
      await user.save();
      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao salvar os dados no banco de dados',
      );
    }
  }

  /**
   * Responsible for user deletion
   * @param userId
   */
  async userDelete(userId: string) {
    const result = await this.userRepository.delete({ id: userId });
    if (result.affected === 0) {
      throw new NotFoundException(
        'Não foi encontrado um usuário com o ID informado',
      );
    }
  }
}
