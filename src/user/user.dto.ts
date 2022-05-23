import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'email',
    example: 'danyaffff',
  })
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @ApiProperty({
    description: 'password',
    example: 'ilovekolya',
  })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
