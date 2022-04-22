import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
  Body,
  NotImplementedException,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { Subject } from '@prisma/client';
import { DeadlineTable } from '@prisma/client';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @ApiOperation({
    summary: 'get all subjects',
  })
  @ApiResponse({
    status: 201,
    description: 'success',
  })
  @ApiResponse({
    status: 403,
    description: 'forbidden',
  })
  @Get('all')
  async getSubject(): Promise<Subject[]> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'add subject',
  })
  @ApiResponse({
    status: 201,
    description: 'success',
  })
  @ApiResponse({
    status: 403,
    description: 'forbidden',
  })
  @Post('post')
  async post(
    @Body()
    id: number,
    subject: Subject,
    gradeType: string,
    lecturerName: string,
    lecturerLink = '',
    practiceName: string,
    practiceLink = '',
    DeadlineTable: DeadlineTable[],
  ): Promise<void> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'delete subject',
  })
  @ApiResponse({
    status: 201,
    description: 'success',
  })
  @ApiResponse({
    status: 403,
    description: 'forbidden',
  })
  @Delete(':id/delete')
  async delete(@Param('id') id: number): Promise<void> {
    throw new NotImplementedException();
  }
}
