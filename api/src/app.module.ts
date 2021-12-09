/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { typeOrmConfig } from './configs/typeorm.config';
import { winstonConfig } from './configs/winston.configs';
import { LoggerInterceptor } from './interceptors/logger.interceptor';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [process.env.TYPEORM_ENTITIES],
      migrations: [process.env.TYPEORM_MIGRATIONS],
      cli: {
        migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR
      },
      synchronize: (process.env.TYPEORM_SYNCHRONIZE === 'true'),
    }), 
    WinstonModule.forRoot(winstonConfig),
    UsersModule
  ],
  controllers: [],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: LoggerInterceptor,
  }],
})
export class AppModule {}
