import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logging.interceptor';
import { PrismaService } from './prisma.service';
import { SubjectService } from './subject/subject.service';
import { DeadlineService } from './Deadline/Deadline.service';
import { SubjectModule } from './subject/subject.module';
import { DeadlineModule } from './Deadline/Deadline.module';
import { HttpExceptionFilter } from './http-exception.filter';

@Module({
  imports: [SubjectModule, DeadlineModule],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    PrismaService,
    SubjectService,
    DeadlineService,
  ],
})
export class AppModule {}
