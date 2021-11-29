/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user-create.dto';
import { ReturnUserDto } from './dto/user-return.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { ApiTags } from '@nestjs/swagger';

/**
 * This class represents the reuturn transaction object
 */
@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    private usersService: UsersService
  ) { }

/**
 * This method is responsible for creating a user
 * @param createUserDto 
 * @returns user and message success
 */
  @Post()
  async createUser(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<ReturnUserDto> {

    const user = await this.usersService.createUser(createUserDto);
    return {
      user,
      message: 'Usuário criado com sucesso!'
    };
  }

/**
 * This method is responsible for searching the user by id
 * @param id 
 * @returns object type user
 */
  @Get(':id')
  async findUserById(
    @Param('id') id: string
    ): Promise<ReturnUserDto> {
    const user = await this.usersService.findUserById(id);
    return {
      user,
      message: 'Usuário encontrado foi [' + user.name.toUpperCase() + ']'
    }
  }

  /**
   * Responsible for listing all users
   * @returns arry of users
   */
  @Get()
  async listAllUsers() {
    const found = await this.usersService.findUsers();
    return {
      found,
      message: 'Usuários encontrados',
    };
  }

  /**
   * Responsible for user update
   * @param updateUserDto 
   * @param id 
   * @returns 
   */
  @Patch(':id')
  async updateUser(
    @Body(ValidationPipe) updateUserDto: UserUpdateDto,
    @Param('id') id: string,
  ) {
    return this.usersService.updateUser(updateUserDto, id);
  }


  /**
   * Responsible for user deletion
   * @param id 
   * @returns message success
   */
  @Delete(':id')
  async userDelete(@Param('id') id: string){
    await this.usersService.userDelete(id);
    return {
      message: 'Usuario removido.'
    };
  }
}
