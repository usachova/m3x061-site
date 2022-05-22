import { DeadlineTableService } from './deadlinetable.service';
import { DeadlineTable } from '@prisma/client';
import { DeadlineTableDto } from './deadlinetable.dto';
export declare class DeadlinetableController {
    private readonly deadlinetableService;
    constructor(deadlinetableService: DeadlineTableService);
    getDeadlineTable(): Promise<DeadlineTable[]>;
    getSomeDeadlineTable(page: number): Promise<DeadlineTable[]>;
    post(deadlinetableDTO: DeadlineTableDto): Promise<DeadlineTable>;
    delete(id: number): Promise<any>;
}
