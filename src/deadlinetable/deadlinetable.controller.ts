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
import { DeadlineTableService } from './deadlinetable.service';
import { DeadlineTable } from '@prisma/client';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SubjectDto } from '../subject/subject.dto';
import { DeadlineTableDto } from './deadlinetable.dto';

@ApiTags('DeadlineTable')
@Controller('deadlinetable')
export class DeadlinetableController {
  constructor(private readonly deadlinetableService: DeadlineTableService) {}

  @ApiOperation({
    summary: 'get all deadlinetables',
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
  async getDeadlineTable(): Promise<DeadlineTable[]> {
    return this.deadlinetableService.deadlineTables({});
  }

  @ApiOperation({
    summary: 'add deadlinetable',
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
    deadlinetableDTO: DeadlineTableDto,
  ) {
    const dl = { subject: deadlinetableDTO.deadline };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const promise = this.deadlinetableService.createDeadlineTable(dl);
    return promise;
  }

  @ApiOperation({
    summary: 'delete deadlinetable',
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
  async delete(@Param('id') id: number): Promise<any> {
    const subj = await this.deadlinetableService.DeadlineTable({
      id: Number(id),
    });
    if (subj == null) {
      throw new HttpException('not found', HttpStatus.BAD_REQUEST);
    }
    return this.deadlinetableService.deleteDeadlineTable({ id: Number(id) });
  }
}
