import { AppService } from './app.service';
import { SubjectService } from './subject/subject.service';
import { DeadlineTableService } from './deadlinetable/deadlinetable.service';
export declare class AppController {
    private readonly appService;
    private readonly subjectService;
    private readonly deadlineTableService;
    constructor(appService: AppService, subjectService: SubjectService, deadlineTableService: DeadlineTableService);
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
    taylor(): {
        title: string;
        logged: boolean;
        unlogged: boolean;
        user: string;
    };
    getHello(): any;
}
