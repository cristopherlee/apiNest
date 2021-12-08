/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
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

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({nullable: false, type: 'varchar', length: 200})
  email: string;

  @ApiProperty()
  @Column({nullable: false, type: 'varchar', length: 200})
  name: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  /**
   * Necessário para os testes unitários
   * @param user 
   */
  constructor(user?: Partial<User>){
    super();

    this.id = user?.id;
    this.email = user?.email;
    this.name = user?.name;
    this.createdAt = user?.createdAt;
    this.updatedAt = user?.updatedAt;
  }
}