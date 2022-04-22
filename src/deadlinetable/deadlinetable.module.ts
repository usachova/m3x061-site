import { Module } from '@nestjs/common';
import { DeadlinetableService } from './deadlinetable.service';

@Module({
  providers: [DeadlinetableService]
})
export class DeadlinetableModule {}
