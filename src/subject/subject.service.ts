import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Subject, Prisma } from '@prisma/client';

@Injectable()
export class SubjectService {
  constructor(private prisma: PrismaService) {}

  async subject(
    SubjectWhereUniqueInput: Prisma.SubjectWhereUniqueInput,
  ): Promise<Subject | null> {
    return this.prisma.subject.findUnique({
      where: SubjectWhereUniqueInput,
    });
  }

  async subjects(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SubjectWhereUniqueInput;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput;
  }): Promise<Subject[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.subject.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createSubject(data: Prisma.SubjectCreateInput): Promise<Subject> {
    return this.prisma.subject.create({
      data,
    });
  }

  async updateSubject(params: {
    where: Prisma.SubjectWhereUniqueInput;
    data: Prisma.SubjectUpdateInput;
  }): Promise<Subject> {
    const { where, data } = params;
    return this.prisma.subject.update({
      data,
      where,
    });
  }

  async deleteSubject(where: Prisma.SubjectWhereUniqueInput): Promise<Subject> {
    return this.prisma.subject.delete({
      where,
    });
  }
}
