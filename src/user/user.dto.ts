import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'login',
    example: 'danyaffff',
  })
  @IsNotEmpty()
  @IsString()
  readonly login: string;

  @ApiProperty({
    description: 'password',
    example: 'ilovekolya',
  })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
