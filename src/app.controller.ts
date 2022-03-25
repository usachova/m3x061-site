import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { SubjectService } from './services/subject.service';
import { DeadlineTableService } from './services/deadlinetable.service';
import {
  Subject as SubjectModel,
  DeadlineTable as DeadlineTableModel,
} from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly subjectService: SubjectService,
    private readonly deadlineTableService: DeadlineTableService,
  ) {}

  @Get()
  @Render('index.hbs')
  root() {
    return {
      title: '😤🤟M33061😎😷️',
      logged: true,
      unlogged: false,
      user: 'гость',
    };
  }

  @Get('ais')
  @Render('ais.hbs')
  ais() {
    return {
      title: 'Архитектура информационных систем',
      logged: false,
      unlogged: true,
      user: '',
    };
  }

  @Get('web')
  @Render('web.hbs')
  web() {
    return {
      title: 'Web-программирование',
      logged: false,
      unlogged: true,
      user: '',
    };
  }

  @Get('philosophy')
  @Render('philosophy.hbs')
  philosophy() {
    return {
      title: 'Философия',
      logged: false,
      unlogged: true,
      user: '',
    };
  }

  @Get('practice')
  @Render('practice.hbs')
  practice() {
    return {
      title: 'Практика',
      logged: false,
      unlogged: true,
      user: '',
    };
  }

  @Get('telecom')
  @Render('telecom.hbs')
  telecom() {
    return {
      title: 'Телекоммуникационные системы и технологии',
      logged: false,
      unlogged: true,
      user: '',
    };
  }
}
