import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
  Body,
  NotImplementedException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Subject } from '@prisma/client';
import { DeadlineTable } from '@prisma/client';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SubjectService } from './subject.service';
import { SubjectDto } from './subject.dto';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @ApiOperation({
    summary: 'get all subjects',
  })
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  @ApiResponse({
    status: 403,
    description: 'forbidden',
  })
  @Get('all')
  async getSubject(): Promise<Subject[]> {
    const promise = this.subjectService.subjects({});
    return promise;
  }

  @ApiOperation({
    summary: 'add subject',
  })
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  @ApiResponse({
    status: 403,
    description: 'forbidden',
  })
  @Post('post')
  async post(
    @Body()
    subjectDTO: SubjectDto,
  ) {
    const subj = { subject: subjectDTO.subject };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const promise = await this.subjectService.createSubject(subj);
    return promise;
  }

  @ApiOperation({
    summary: 'delete subject',
  })
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  @ApiResponse({
    status: 403,
    description: 'forbidden',
  })
  @Delete(':id/delete')
  async delete(@Param('id') id: number): Promise<any> {
    const subj = await this.subjectService.subject({
      id: Number(id),
    });
    if (subj == null) {
      throw new HttpException('not found', HttpStatus.BAD_REQUEST);
    }
    return this.subjectService.deleteSubject({ id: Number(id) });
  }
}
