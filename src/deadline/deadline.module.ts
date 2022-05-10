import { Module } from '@nestjs/common';
import { DeadlineService } from './Deadline.service';
import { DeadlineController } from './Deadline.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [DeadlineService, PrismaService],
  controllers: [DeadlineController],
})
export class DeadlineModule {}
