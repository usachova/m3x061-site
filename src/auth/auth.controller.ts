import {
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { LoggingInterceptor } from '../logging.interceptor';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { UserDto } from '../user/user.dto';

@ApiTags('Auth')
@UseInterceptors(new LoggingInterceptor())
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @ApiOperation({
    summary: 'Get all user stored in DataBase',
  })
  @ApiResponse({
    status: 200,
    description: 'Users provided',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @Get('users')
  async users(@Req() request: Request) {
    return this.authService.users();
  }

  @ApiOperation({
    summary: 'Found user from database and return if needed',
  })
  @ApiBody({
    type: UserDto,
  })
  @ApiResponse({
    status: 200,
    description: 'User logged in',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @Post('login')
  async login(
    @Body() user: UserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const loggedUser = await this.authService.login(user.login);

    if (
      !loggedUser ||
      !(await bcrypt.compare(user.password, loggedUser.password))
    ) {
      throw new BadRequestException('Invalid credentials');
    }

    const jwt = await this.jwtService.signAsync({
      id: loggedUser.id,
    });

    response.cookie('jwt', jwt, { httpOnly: true });

    return {
      message: 'User successfully login',
      user: user,
      jwt: jwt,
    };
  }

  @ApiOperation({
    summary: 'Register user and add it to DataBase',
  })
  @ApiBody({
    type: UserDto,
  })
  @ApiResponse({
    status: 200,
    description: 'User created',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @Post('register')
  async register(@Body() user: UserDto) {
    if (await this.authService.login(user.login)) {
      throw new BadRequestException('User already exists');
    }
    return {
      message: 'User successfully registered',
      user: await this.authService.register(user.login, user.password),
    };
  }

  @ApiOperation({
    summary: 'Delete user',
  })
  @ApiQuery({
    name: 'id',
    type: 'number',
  })
  @ApiResponse({
    status: 200,
    description: 'Deleted',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @Delete('user')
  async delete(@Query('id', ParseIntPipe) id: number) {
    return {
      message: 'User successfully deleted',
      user: await this.authService.delete(id),
    };
  }
}
