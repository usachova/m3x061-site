import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import internal from 'stream';

export class DeadlineTableDto {
  @ApiProperty({
    description: 'Title',
    example: 'Хостинг веб-приложения на сервисе Heroku',
  })
  readonly title: string;

  @ApiProperty({
    description: 'MinScore',
    example: '5',
  })
  @IsNotEmpty()
  readonly minScore: string;

  @ApiProperty({
    description: 'maxScore',
    example: '15',
  })
  @IsNotEmpty()
  readonly maxScore: string;

  @ApiProperty({
    description: 'Deadline',
    example: '5.05',
  })
  readonly deadline: string;
}
