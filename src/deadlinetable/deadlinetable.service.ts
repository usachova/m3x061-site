import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DeadlineTable, Prisma } from '@prisma/client';

@Injectable()
export class DeadlineTableService {
  constructor(private prisma: PrismaService) {}

  async DeadlineTable(
    DeadlineTableWhereUniqueInput: Prisma.DeadlineTableWhereUniqueInput,
  ): Promise<DeadlineTable | null> {
    return this.prisma.deadlineTable.findUnique({
      where: DeadlineTableWhereUniqueInput,
    });
  }

  async deadlineTables(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DeadlineTableWhereUniqueInput;
    where?: Prisma.DeadlineTableWhereInput;
    orderBy?: Prisma.DeadlineTableOrderByWithRelationInput;
  }): Promise<DeadlineTable[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.deadlineTable.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createDeadlineTable(
    data: Prisma.DeadlineTableCreateInput,
  ): Promise<DeadlineTable> {
    return this.prisma.deadlineTable.create({
      data,
    });
  }

  async updateDeadlineTable(params: {
    where: Prisma.DeadlineTableWhereUniqueInput;
    data: Prisma.DeadlineTableUpdateInput;
  }): Promise<DeadlineTable> {
    const { where, data } = params;
    return this.prisma.deadlineTable.update({
      data,
      where,
    });
  }

  async deleteDeadlineTable(
    where: Prisma.DeadlineTableWhereUniqueInput,
  ): Promise<DeadlineTable> {
    return this.prisma.deadlineTable.delete({
      where,
    });
  }
}
