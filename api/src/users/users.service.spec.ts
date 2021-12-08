/* eslint-disable prettier/prettier */
import { NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/user-create.dto';
import { User } from './user.entity';
import { UserRepository } from "./users.repository";
import { UsersService } from "./users.service";

const userEntityList: User[] = [
  new User({ name: "Nome-1", email: "email-1"}),
  new User({ name: "Nome-2", email: "email-2"}),
  new User({ name: "Nome-3", email: "email-3"})
];

/**
 * Moka todos as funções dizendo que são funções do tipo Jest.
 * @returns 
 */
const mockUserRepository = () => ({
  delete: jest.fn(),
  
  // Estou informando que quero que retorne uma Promise resolvida com a lista de usuarios que eu definir
  findUsers: jest.fn().mockResolvedValue(userEntityList),
  findOne: jest.fn().mockResolvedValue(userEntityList[0]),
  createUser: jest.fn().mockReturnValue(userEntityList[0]),
});

describe('UsersService', () => {
  let userRepository;
  let userService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UserRepository,
          useFactory: mockUserRepository,
        },
      ],
    }).compile();

    userRepository = await module.get<UserRepository>(UserRepository);
    userService = await module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  /**
   * Definição de suite de casos de uso de find de usuários
   */
  describe('findAll', () => {
    /**
     * Este caso de uso deve ser async por conta do método retornar uma Promise
     */
    it('Should return a user list entity successfully', async () => {
      // Act
      const result = await userService.findUsers();

      // Assert
      expect(result).toEqual(userEntityList);
      expect(userRepository.findUsers).toHaveBeenCalledTimes(1);
    });

    it('Should throw as exception', async () => {
      // Arrange
      
      // Muda o resultado mocado da função. 
      // Usando o mockRejectedValueOnce, quando o teste terminar, ele reseta para a origem
      jest.spyOn(userRepository, 'findUsers').mockRejectedValueOnce(new Error())

      // Assert
      expect(userService.findUsers()).rejects.toThrowError();
    });
  });

  describe('findOne', () => {
    it('Should return a user entity successfully', async () => {
      // Act
      const result = await userService.findUserById('1');
      
      // Assert
      expect(result).toEqual(userEntityList[0]);
      expect(userRepository.findOne).toHaveBeenCalledTimes(1);
    });

    it('Should throw as exception', async () => {
      // Arrange
      
      // Muda o resultado mocado da função. 
      // Usando o mockRejectedValueOnce, quando o teste terminar, ele reseta para a origem
      jest.spyOn(userRepository, 'findOne').mockRejectedValueOnce(new Error())

      // Assert
      expect(userService.findUserById('1')).rejects.toThrowError(
        NotFoundException
      );
    });
  });

  describe('create', () => {
    let mockCreateUserDto: CreateUserDto;

    beforeEach(() => {
      mockCreateUserDto = { 
        name: "Nome-1", 
        email: "email-1"
      };
    });

    it('Should create a new user entity item successfully', async () => {
      // Act
      const result  = await userService.createUser(mockCreateUserDto);
      
      expect(result).toEqual(userEntityList[0]);
      expect(userRepository.createUser).toHaveBeenCalledTimes(1);
      expect(userRepository.createUser).toHaveBeenCalledWith(mockCreateUserDto);
    });

    it('Should throw as exception', async () => {
      // Arrange

      // Muda o resultado mocado da função. 
      // Usando o mockRejectedValueOnce, quando o teste terminar, ele reseta para a origem
      jest.spyOn(userRepository, 'createUser').mockRejectedValueOnce(new Error())

      // Assert
      expect(userService.createUser(mockCreateUserDto)).rejects.toThrowError();
    });
  });

  describe('delete', () => {
    it('Should delete a user entity item successfully', async () => {
      // Act
      userRepository.delete.mockResolvedValue({ affected: 1 });

      await userService.userDelete('1');
      
      // Assert
      expect(userRepository.delete).toHaveBeenCalledWith({ id: '1' });
    });

    it('Should throw a not found exception', async () => {
      //userRepository.delete.mockResolvedValue({ affected: 0 });

      // Arrange
      jest.spyOn(userRepository, 'delete').mockRejectedValueOnce(new Error());
      

      expect(userService.userDelete('1')).rejects.toThrowError();
    });

    it('Should throw an exception', async () => {
      userRepository.delete.mockResolvedValue({ affected: 0 });

      expect(userService.userDelete('1')).rejects.toThrow(NotFoundException);
    });
  });
});