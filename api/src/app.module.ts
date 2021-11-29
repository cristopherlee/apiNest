/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { typeOrmConfig } from './configs/typeorm.config';
import { winstonConfig } from './configs/winston.configs';
import { LoggerInterceptor } from './interceptors/logger.interceptor';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), 
    UsersModule,
    WinstonModule.forRoot(winstonConfig)],
  controllers: [],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: LoggerInterceptor,
  }],
})
export class AppModule {}
