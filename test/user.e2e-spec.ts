/*import { UserRepository } from '../src/users/users.repository';
import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "../src/configs/typeorm.config";
import { UsersModule } from "../src/users/users.module";
import { UsersService } from '../src/users/users.service';
import { User } from '../src/users/user.entity';
// import supertest from 'supertest';
import { CreateUserDto } from 'src/users/dto/user-create.dto';

import * as request from 'supertest';
import { Repository } from 'typeorm';

const userEntityList = [
    {
        id: undefined,
        email: 'email-1',
        name: 'Nome-1',
        createdAt: undefined,
        updatedAt: undefined
    },
    {
        id: undefined,
        email: 'email-2',
        name: 'Nome-2',
        createdAt: undefined,
        updatedAt: undefined
    },
    {
        id: undefined,
        email: 'email-3',
        name: 'Nome-3',
        createdAt: undefined,
        updatedAt: undefined
    }
];

describe('Users', () => {
    let app: INestApplication;
    let catsService = {
        createUser: (createUserDto: CreateUserDto) => userEntityList[0],
        findUsers: () => userEntityList
    };

    let repository: Repository<User>;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [
                UsersModule,
                TypeOrmModule.forRoot(typeOrmConfig)
            ],
        })
            .overrideProvider(UsersService)
            .useValue(catsService)
            .compile();

        app = moduleRef.createNestApplication();
        await app.init();

        repository = moduleRef.get('UserRepository');

        console.log('repository', repository)
    });

    it(`/GET users`, async () => {

        //await catsService.createUser({ name: 'test-name-0', email: 'test-email-0' });
        //await catsService.createUser({ name: 'test-name-1', email: 'test-email-1' });
        //await catsService.createUser({ name: 'test-name-10', email: 'test-email-10' });

        
        const { body } = await supertest.agent(app.getHttpServer())
        .get('/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

        
        const result = request(app.getHttpServer())
        .get('/users')
        .expect(200);

        console.log(result)

        return result.expect({
                data: catsService.findUsers(),
            });
    });

    afterEach(async () => {
        //await repository.query(`DELETE FROM users;`);
    });

    afterAll(async () => {
        await app.close();
    });
});
*/
