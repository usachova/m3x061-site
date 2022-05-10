"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectModule = void 0;
const common_1 = require("@nestjs/common");
const subject_service_1 = require("./subject.service");
const subject_controller_1 = require("./subject.controller");
const prisma_service_1 = require("../prisma.service");
let SubjectModule = class SubjectModule {
};
SubjectModule = __decorate([
    (0, common_1.Module)({
        providers: [subject_service_1.SubjectService, prisma_service_1.PrismaService],
        controllers: [subject_controller_1.SubjectController],
    })
], SubjectModule);
exports.SubjectModule = SubjectModule;
//# sourceMappingURL=subject.module.js.map