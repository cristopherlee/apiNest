/* eslint-disable prettier/prettier */
import { 
  BaseEntity, Column, 
  CreateDateColumn, Entity, 
  PrimaryGeneratedColumn, 
  Unique, 
  UpdateDateColumn } from "typeorm";

  /**
   *  Represents the User type and specifies its attributes.
   */
@Entity()
@Unique(['email'])
export class User extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: false, type: 'varchar', length: 200})
  email: string;

  @Column({nullable: false, type: 'varchar', length: 200})
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}