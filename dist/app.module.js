"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const core_1 = require("@nestjs/core");
const logging_interceptor_1 = require("./logging.interceptor");
const prisma_service_1 = require("./prisma.service");
const subject_service_1 = require("./subject/subject.service");
const deadlinetable_service_1 = require("./deadlinetable/deadlinetable.service");
const subject_module_1 = require("./subject/subject.module");
const deadlinetable_module_1 = require("./deadlinetable/deadlinetable.module");
const http_exception_filter_1 = require("./http-exception.filter");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [subject_module_1.SubjectModule, deadlinetable_module_1.DeadlinetableModule, auth_module_1.AuthModule, user_module_1.UserModule],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            { provide: core_1.APP_FILTER, useClass: http_exception_filter_1.HttpExceptionFilter },
            { provide: core_1.APP_INTERCEPTOR, useClass: logging_interceptor_1.LoggingInterceptor },
            prisma_service_1.PrismaService,
            subject_service_1.SubjectService,
            deadlinetable_service_1.DeadlineTableService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map