import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../src/users/user.entity";
import { UsersModule } from "../src/users/users.module";
import { UserRepository } from "../src/users/users.repository";
// import supertest from 'supertest';

import supertest, * as request from 'supertest';

describe('Users', () => {
    let app: INestApplication;
    let repository: UserRepository;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [
                UsersModule,
                // Use the e2e_test database to run the tests
                TypeOrmModule.forRoot({
                    type: process.env.TYPEORM_CONNECTION as any,
                    host: process.env.TYPEORM_HOST,
                    port: parseInt(process.env.TYPEORM_PORT),
                    username: process.env.TYPEORM_USERNAME,
                    password: process.env.TYPEORM_PASSWORD,
                    database: process.env.TYPEORM_DATABASE_TEST,
                    entities: [User],
                    synchronize: false,
                }),
            ],
        }).compile();
        app = module.createNestApplication();

        repository = module.get('UserRepository');

        await app.init();
    });

    afterEach(async () => {
        await repository.query(`DELETE FROM users;`);
    });

    afterAll(async () => {
        await app.close();
    });

    describe('GET /users', () => {
        it('should return an array of users', async () => {
            // Pre-populate the DB with some dummy users
            await repository.save([
                { name: 'test-name-0', email: 'test-name-0@email.com' },
                { name: 'test-name-1', email: 'test-name-1@email.com' },
            ]);

            // Run your end-to-end test
            const { body } = await supertest.agent(app.getHttpServer())
                .get('/users')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200);

            expect(body[0].name).toEqual('test-name-0');
        });
    });
});

/*
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
});*/

