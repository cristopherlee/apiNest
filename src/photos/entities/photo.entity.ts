import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/user.entity';
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'photos' })
export class Photo extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 500 })
  description: string;

  @ApiProperty()
  @ManyToOne(() => User, (author: User) => author.photos, {
    onDelete: 'CASCADE',
  })
  public author: User;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
