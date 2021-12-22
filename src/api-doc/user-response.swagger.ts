import { ApiProperty } from '@nestjs/swagger';

export class UserResponseSwagger {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty({
    type: String,
    description: 'name of user',
  })
  name: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
