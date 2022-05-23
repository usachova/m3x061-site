import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [UserModule],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
