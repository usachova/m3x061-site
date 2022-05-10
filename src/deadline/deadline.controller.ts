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
  ParseIntPipe,
} from '@nestjs/common';
import { DeadlineService } from './Deadline.service';
import { Deadline } from '@prisma/client';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SubjectDto } from '../subject/subject.dto';
import { DeadlineDto } from './Deadline.dto';

@ApiTags('Deadline')
@Controller('Deadline')
export class DeadlineController {
  constructor(private readonly DeadlineService: DeadlineService) {}

  @ApiOperation({
    summary: 'get all Deadlines',
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
  async getDeadline(): Promise<Deadline[]> {
    return this.DeadlineService.Deadlines({});
  }

  @ApiOperation({
    summary: 'add Deadline',
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
  @Post('post')
  async post(
    @Body()
    DeadlineDTO: DeadlineDto,
  ) {
    const dl = { subject: DeadlineDTO.deadline };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const promise = this.DeadlineService.createDeadline(dl);
    return promise;
  }

  @ApiOperation({
    summary: 'delete Deadline',
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
  async delete(@Param('id', ParseIntPipe) id: number): Promise<any> {
    const subj = await this.DeadlineService.Deadline({
      id: Number(id),
    });
    if (subj == null) {
      throw new HttpException('not found', HttpStatus.BAD_REQUEST);
    }
    return this.DeadlineService.deleteDeadline({ id: Number(id) });
  }
}
