import { PrismaService } from '../prisma.service';
import { Deadline, Prisma } from '@prisma/client';
export declare class DeadlineService {
    private prisma;
    constructor(prisma: PrismaService);
    Deadline(DeadlineWhereUniqueInput: Prisma.DeadlineWhereUniqueInput): Promise<Deadline | null>;
    Deadlines(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.DeadlineWhereUniqueInput;
        where?: Prisma.DeadlineWhereInput;
        orderBy?: Prisma.DeadlineOrderByWithRelationInput;
    }): Promise<Deadline[]>;
    createDeadline(data: Prisma.DeadlineCreateInput): Promise<Deadline>;
    updateDeadline(params: {
        where: Prisma.DeadlineWhereUniqueInput;
        data: Prisma.DeadlineUpdateInput;
    }): Promise<Deadline>;
    deleteDeadline(where: Prisma.DeadlineWhereUniqueInput): Promise<Deadline>;
}
