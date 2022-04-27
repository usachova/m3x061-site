import { Module } from '@nestjs/common';
import { DeadlineTableService } from './deadlinetable.service';
import { DeadlinetableController } from './deadlinetable.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [DeadlineTableService, PrismaService],
  controllers: [DeadlinetableController],
})
export class DeadlinetableModule {}
