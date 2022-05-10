import { Subject } from '@prisma/client';
import { SubjectService } from './subject.service';
import { SubjectDto } from './subject.dto';
export declare class SubjectController {
    private readonly subjectService;
    constructor(subjectService: SubjectService);
    getSubject(): Promise<Subject[]>;
    post(subjectDTO: SubjectDto): Promise<Subject>;
    delete(id: number): Promise<any>;
}
