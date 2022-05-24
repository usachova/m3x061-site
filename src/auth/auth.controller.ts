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
    summary: 'register user',
  })
  @ApiBody({
    type: UserDto,
  })
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  @ApiResponse({
    status: 400,
    description: 'bad request',
  })
  @Post('register')
  async register(@Body() user: UserDto) {
    if (await this.authService.login(user.login)) {
      throw new BadRequestException('User already exists');
    }
    return {
      message: 'user registered',
      user: await this.authService.register(user.login, user.password),
    };
  }

  @ApiOperation({
    summary: 'login user',
  })
  @ApiBody({
    type: UserDto,
  })
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  @ApiResponse({
    status: 400,
    description: 'bad request',
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
      user: user,
      jwt: jwt,
    };
  }

  @ApiOperation({
    summary: 'get all users',
  })
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  @ApiResponse({
    status: 400,
    description: 'bad request',
  })
  @Get('users')
  async users(@Req() request: Request) {
    return this.authService.users();
  }

  @ApiOperation({
    summary: 'delete user',
  })
  @ApiQuery({
    name: 'id',
    type: 'number',
  })
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  @ApiResponse({
    status: 400,
    description: 'bad request',
  })
  @Delete('user')
  async delete(@Query('id', ParseIntPipe) id: number) {
    return {
      message: 'user deleted',
      user: await this.authService.delete(id),
    };
  }
}
