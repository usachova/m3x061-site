import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logging.interceptor';
import { PrismaService } from './services/prisma.service';
import { SubjectService } from './services/subject.service';
import { DeadlineTableService } from './services/deadlinetable.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    PrismaService,
    SubjectService,
    DeadlineTableService,
  ],
})
export class AppModule {}
