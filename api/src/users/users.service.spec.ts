/* eslint-disable prettier/prettier */
import { NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/user-create.dto';
import { UserRepository } from "./users.repository";
import { UsersService } from "./users.service";

const mockUserRepository = () => ({
  createUser: jest.fn(),
  findOne: jest.fn(),
  delete: jest.fn(),
  findUsers: jest.fn(),
});

describe('UsersService', () => {
  let userRepository;
  let service;

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
    service = await module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  describe('createUser', () => {
    let mockCreateUserDto: CreateUserDto;

    beforeEach(() => {
      mockCreateUserDto = {
        email: 'mock@email.com',
        name: 'Mock User',
      };
    });

    it('TESTE CRIAÇÃO DE USUÁRIO', async () => {
      userRepository.createUser.mockResolvedValue('mockUser');
      const result = await service.createUser(mockCreateUserDto);

      expect(userRepository.createUser).toHaveBeenCalledWith(
        mockCreateUserDto,
      );
      expect(result).toEqual('mockUser');
    });

    it('TESTE VALIDAÇÃO DE E-MAIL', async () => {
      mockCreateUserDto.email = 'emailValid';
      expect(service.createUser(mockCreateUserDto)).rejects.toThrow(
        UnprocessableEntityException,
      );
    });
  });

  describe('findUserById', () => {
    it('BUSCANDO USER POR ID', async () => {
      userRepository.findOne.mockResolvedValue('mockUser');
      expect(userRepository.findOne).not.toHaveBeenCalled();

      const result = await service.findUserById('mockId');
      const select = ['email', 'name', 'id'];
      expect(userRepository.findOne).toHaveBeenCalledWith('mockId', { select });
      expect(result).toEqual('mockUser');
    });

    it('TESTE USUARIO NÃO ENCONTRADO', async () => {
      userRepository.findOne.mockResolvedValue(null);
      expect(service.findUserById('mockId')).rejects.toThrow(NotFoundException);
    });
  });

  describe('deleteUser', () => {
    it('retorna a quantidade de usuários deletados', async () => {
      userRepository.delete.mockResolvedValue({ affected: 1 });

      await service.userDelete('mockId');
      expect(userRepository.delete).toHaveBeenCalledWith({ id: 'mockId' });
    });

    it('ERROR SE USUÁRIO NÃO FOR EXCLUÍDO', async () => {
      userRepository.delete.mockResolvedValue({ affected: 0 });

      expect(service.userDelete('mockId')).rejects.toThrow(NotFoundException);
    });
  });
});