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
    WinstonModule.forRoot(winstonConfig),
    UsersModule
  ],
  /*
  Exemplo de import com config
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get('DB_HOST', 'localhost'),
        port: Number(configService.get('DB_PORT', 3306)),
        username: configService.get('DB_USERNAME', 'root'),
        password: configService.get('DB_PASSWORD', '123'),
        database: configService.get('DB_DATABASE', 'todo'),
        entities: [__dirname + '.entity{.js,.ts}'],
        synchronize: true,
      }),
    }),
    TodoModule,
  ],

  */
  controllers: [],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: LoggerInterceptor,
  }],
})
export class AppModule {}
