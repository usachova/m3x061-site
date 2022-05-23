import { PrismaService } from '../prisma.service';
import { DeadlineTable, Prisma } from '@prisma/client';
import { DeadlineTableDto } from './deadlinetable.dto';
export declare class DeadlineTableService {
    private prisma;
    constructor(prisma: PrismaService);
    DeadlineTable(DeadlineTableWhereUniqueInput: Prisma.DeadlineTableWhereUniqueInput): Promise<DeadlineTable | null>;
    deadlineTables(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.DeadlineTableWhereUniqueInput;
        where?: Prisma.DeadlineTableWhereInput;
        orderBy?: Prisma.DeadlineTableOrderByWithRelationInput;
    }): Promise<DeadlineTable[]>;
    createDeadlineTable(deadlineTable: DeadlineTableDto): Promise<DeadlineTable>;
    updateDeadlineTable(params: {
        where: Prisma.DeadlineTableWhereUniqueInput;
        data: Prisma.DeadlineTableUpdateInput;
    }): Promise<DeadlineTable>;
    deleteDeadlineTable(where: Prisma.DeadlineTableWhereUniqueInput): Promise<DeadlineTable>;
}
