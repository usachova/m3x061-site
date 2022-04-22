import { Module } from '@nestjs/common';
import { DeadlinetableService } from './deadlinetable.service';
import { DeadlinetableController } from './deadlinetable.controller';

@Module({
  providers: [DeadlinetableService],
  controllers: [DeadlinetableController]
})
export class DeadlinetableModule {}
