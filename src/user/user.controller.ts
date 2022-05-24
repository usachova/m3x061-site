import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Render,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { LoggingInterceptor } from '../logging.interceptor';

@ApiTags('Users')
@UseInterceptors(new LoggingInterceptor())
@Controller()
export class UserController {
  @ApiOperation({
    summary: 'get user',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Get('users')
  @Render('users')
  getUser() {
    return;
  }
}
