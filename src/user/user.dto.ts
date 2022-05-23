import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

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
  @Length(8, 16)
  @IsString()
  readonly password: string;
}
