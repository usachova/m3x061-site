import { PrismaService } from '../prisma.service';
import { Subject, Prisma } from '@prisma/client';
export declare class SubjectService {
    private prisma;
    constructor(prisma: PrismaService);
    subject(SubjectWhereUniqueInput: Prisma.SubjectWhereUniqueInput): Promise<Subject | null>;
    subjects(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.SubjectWhereUniqueInput;
        where?: Prisma.SubjectWhereInput;
        orderBy?: Prisma.SubjectOrderByWithRelationInput;
    }): Promise<Subject[]>;
    createSubject(data: Prisma.SubjectCreateInput): Promise<Subject>;
    updateSubject(params: {
        where: Prisma.SubjectWhereUniqueInput;
        data: Prisma.SubjectUpdateInput;
    }): Promise<Subject>;
    deleteSubject(where: Prisma.SubjectWhereUniqueInput): Promise<Subject>;
}
