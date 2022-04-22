import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
  Body,
  NotImplementedException,
} from '@nestjs/common';
import { DeadlinetableService } from './deadlinetable.service';
import { DeadlineTable } from '@prisma/client';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('deadlinetable')
export class DeadlinetableController {
  constructor(private readonly deadlinetableService: DeadlinetableService) {}

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
  async getSubject(): Promise<DeadlineTable[]> {
    throw new NotImplementedException();
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
  async post(
    @Body()
    id: number,
    name: string,
    subjectId: number,
    title: string,
    minScore = 0,
    maxScore = 0,
    deadline: string,
  ): Promise<void> {
    throw new NotImplementedException();
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
  async delete(@Param('id') id: number): Promise<void> {
    throw new NotImplementedException();
  }
}
