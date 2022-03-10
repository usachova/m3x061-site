import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get()
  @Render('index.hbs')
  root() {
    return { title: '😤🤟M33061😎😷️' };
  }

  @Get('ais')
  @Render('ais.hbs')
  ais() {
    return { title: 'Архитектура информационных систем' };
  }

  @Get('web')
  @Render('web.hbs')
  web() {
    return { title: 'Web-программирование' };
  }

  @Get('philosophy')
  @Render('philosophy.hbs')
  philosophy() {
    return { title: 'Философия' };
  }

  @Get('practice')
  @Render('practice.hbs')
  practice() {
    return { title: 'Практика' };
  }

  @Get('telecom')
  @Render('telecom.hbs')
  telecom() {
    return { title: 'Телекоммуникационные системы и технологии' };
  }
}
