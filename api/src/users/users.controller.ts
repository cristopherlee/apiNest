import { UserResponseSwagger } from '../api-doc/user-response.swagger';
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user-create.dto';
import { ReturnUserDto } from './dto/user-return.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { BadRequestSwagger } from '../helpers/swagger/bad-request.swagger';
import { NotFoundSwagger } from '../helpers/swagger/not-found.swagger';

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
   * Responsible for listing all users
   * @returns arry of users
   */
  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários retornada com sucesso',
    type: UserResponseSwagger,
    isArray: true
  })
  async findAll(): Promise<User[]> {
    return await this.usersService.findUsers();
  }

  /**
   * This method is responsible for creating a user
   * @param createUserDto 
   * @returns user and message success
   */
  @Post()
  @ApiOperation({ summary: 'Adicionar um novo usuário' })
  @ApiCreatedResponse({
    type: UserResponseSwagger,
    description: "Novo usuário criado com sucesso."
  })
  @ApiBadRequestResponse({
    type: BadRequestSwagger,
    description: "Parâmetros inválidos."
  })
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
  @ApiOperation({ summary: 'Exibir os dados de um usuário' })
  @ApiOkResponse({
    type: UserResponseSwagger,
    description: "Dados do um usuário retornado com sucesso."
  })
  @ApiNotFoundResponse({
    type: NotFoundSwagger,
    description: "Usuário não foi encontrado."
  })
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
   * Responsible for user update
   * @param updateUserDto 
   * @param id 
   * @returns 
   */
  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar os dados de um usuário' })
  @ApiOkResponse({
    type: UserResponseSwagger,
    description: "Usuário atualizado com sucesso."
  })
  @ApiNotFoundResponse({
    type: BadRequestSwagger,
    description: "Dados inválidos."
  })
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
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover um usuário' })
  @ApiResponse({ status: 204, description: 'Usuário removido com sucesso' })
  @ApiResponse({
    status: 404,
    description: 'Usuário não foi encontrada',
    type: NotFoundSwagger,
  })
  async deleteUser(@Param('id') id: string) {
    await this.usersService.userDelete(id);
    return {
      message: 'Usuario removido.'
    };
  }
}
