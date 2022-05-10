import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { SubjectService } from './subject/subject.service';
import { DeadlineService } from './Deadline/Deadline.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly subjectService: SubjectService,
    private readonly DeadlineService: DeadlineService,
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
