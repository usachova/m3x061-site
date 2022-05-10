import { AppService } from './app.service';
import { SubjectService } from './subject/subject.service';
import { DeadlineService } from './Deadline/Deadline.service';
export declare class AppController {
    private readonly appService;
    private readonly subjectService;
    private readonly DeadlineService;
    constructor(appService: AppService, subjectService: SubjectService, DeadlineService: DeadlineService);
    root(): {
        title: string;
        logged: boolean;
        unlogged: boolean;
        user: string;
    };
    ais(): {
        title: string;
        logged: boolean;
        unlogged: boolean;
        user: string;
    };
    web(): {
        title: string;
        logged: boolean;
        unlogged: boolean;
        user: string;
    };
    philosophy(): {
        title: string;
        logged: boolean;
        unlogged: boolean;
        user: string;
    };
    practice(): {
        title: string;
        logged: boolean;
        unlogged: boolean;
        user: string;
    };
    telecom(): {
        title: string;
        logged: boolean;
        unlogged: boolean;
        user: string;
    };
}
