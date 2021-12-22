import { Photo } from './../photos/entities/photo.entity';
/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

/**
 *  Represents the User type and specifies its attributes.
 */
@Entity({ name: 'users' })
@Unique(['email'])
export class User extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 200 })
  email: string;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @ApiProperty()
  @OneToMany(() => Photo, (photo: Photo) => photo.author)
  public photos: Photo[];

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Exclude()
  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  /**
   * Necessário para os testes unitários
   * @param user
   */
  constructor(user?: Partial<User>) {
    super();

    this.id = user?.id;
    this.email = user?.email;
    this.name = user?.name;
    this.photos = user?.photos;
    this.createdAt = user?.createdAt;
    this.updatedAt = user?.updatedAt;
  }
}
