import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async users() {
    return await this.prisma.user.findMany();
  }

  async login(login: string) {
    return await this.prisma.user.findFirst({ where: { login: login } });
  }

  async register(login: string, password: string) {
    return this.prisma.user.create({
      data: {
        login: login,
        password: await bcrypt.hash(password, 8),
      },
    });
  }

  async delete(id: number) {
    return await this.prisma.user.delete({ where: { id: id } });
  }
}
