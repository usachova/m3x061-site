import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logging.interceptor';
import { PrismaService } from './prisma.service';
import { SubjectService } from './subject/subject.service';
import { DeadlineTableService } from './deadlinetable/deadlinetable.service';
import { SubjectModule } from './subject/subject.module';
import { DeadlinetableModule } from './deadlinetable/deadlinetable.module';
import { HttpExceptionFilter } from './http-exception.filter';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [SubjectModule, DeadlinetableModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    PrismaService,
    SubjectService,
    DeadlineTableService,
  ],
})
export class AppModule {}
