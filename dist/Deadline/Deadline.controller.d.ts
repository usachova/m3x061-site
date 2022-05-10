import { DeadlineService } from './Deadline.service';
import { Deadline } from '@prisma/client';
import { DeadlineDto } from './Deadline.dto';
export declare class DeadlineController {
    private readonly DeadlineService;
    constructor(DeadlineService: DeadlineService);
    getDeadline(): Promise<Deadline[]>;
    post(DeadlineDTO: DeadlineDto): Promise<Deadline>;
    delete(id: number): Promise<any>;
}
