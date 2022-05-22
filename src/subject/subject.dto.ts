import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SubjectDto {
  @ApiProperty({
    description: 'Name',
    example: 'WEB-программирование',
  })
  readonly name: string;

  @ApiProperty({
    description: 'GradeType',
    example: 'экзамен',
  })
  readonly gradeType: string;

  @ApiProperty({
    description: 'LecturerName',
    example: 'Роман',
  })
  readonly lecturerName: string;

  @ApiProperty({
    description: 'LecturerLink',
    example:
      'https://isu.ifmo.ru/pls/apex/f?p=2143:3:110250148663533::NO::PID:184321',
  })
  @IsNotEmpty()
  readonly lecturerLink: string;

  @ApiProperty({
    description: 'PracticeName',
    example: 'Рома',
  })
  readonly practiceName: string;

  @ApiProperty({
    description: 'PracticeLink',
    example:
      'https://isu.ifmo.ru/pls/apex/f?p=2143:3:110250148663533::NO::PID:184321',
  })
  @IsNotEmpty()
  readonly practiceLink: string;
}
