/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from './dto/user-create.dto';
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

/**
 * This class is responsible for performing the persistence with our database.
 */
@EntityRepository(User)
export class UserRepository extends Repository<User> {


  /**
   * This method is responsible for creating a user
   * @param createUserDto 
   * @returns object user
   */
  async createUser(createUserDto: CreateUserDto): Promise<User> {

    const {email, name} = createUserDto;

    let userValid = false;
    let errorMsg = '';

    
    if(!email) {
      userValid = false;
      errorMsg = 'Email vazio.';
    }else if (!name) {
      userValid = false;
      errorMsg = 'O nome é Obrigatório.'
    } else {
      userValid = true;
    }


    if(userValid){
      const user = this.create();
      user.email = email;
      user.name = name;
      try {
        await user.save();
        return user;
      }catch (error){
        if(error.code.toString() === '23505'){
          throw new ConflictException('Endereço de email já está em uso');
        }else{
          throw new InternalServerErrorException('Erro ao salvar o usuário no banco de dados');
        }
      }
    }else{
      throw new ConflictException(errorMsg);
    }
  }


  /**
   * 
   * This method is responsible for find all Users
   * @returns users array
   */
  async findUsers(): Promise<User[]> {
    const users = this.find();
    return users;
  }

}