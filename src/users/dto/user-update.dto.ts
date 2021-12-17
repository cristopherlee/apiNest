import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

/**
 * This class represents the user update transaction object
 */
export class UserUpdateDto {
  @IsOptional()
  @IsEmail({
    message: 'Informe um usuário Válido.',
  })
  @ApiProperty()
  email: string;

  @IsOptional()
  @IsString({
    message: 'Informe o nome do usuário!',
  })
  @ApiProperty()
  name: string;
}
