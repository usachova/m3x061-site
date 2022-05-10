import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Deadline, Prisma } from '@prisma/client';

@Injectable()
export class DeadlineService {
  constructor(private prisma: PrismaService) {}

  async Deadline(
    DeadlineWhereUniqueInput: Prisma.DeadlineWhereUniqueInput,
  ): Promise<Deadline | null> {
    return this.prisma.Deadline.findUnique({
      where: DeadlineWhereUniqueInput,
    });
  }

  async Deadlines(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DeadlineWhereUniqueInput;
    where?: Prisma.DeadlineWhereInput;
    orderBy?: Prisma.DeadlineOrderByWithRelationInput;
  }): Promise<Deadline[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.Deadline.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createDeadline(data: Prisma.DeadlineCreateInput): Promise<Deadline> {
    return this.prisma.Deadline.create({
      data,
    });
  }

  async updateDeadline(params: {
    where: Prisma.DeadlineWhereUniqueInput;
    data: Prisma.DeadlineUpdateInput;
  }): Promise<Deadline> {
    const { where, data } = params;
    return this.prisma.Deadline.update({
      data,
      where,
    });
  }

  async deleteDeadline(
    where: Prisma.DeadlineWhereUniqueInput,
  ): Promise<Deadline> {
    return this.prisma.Deadline.delete({
      where,
    });
  }
}
