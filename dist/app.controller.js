"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const subject_service_1 = require("./subject/subject.service");
const Deadline_service_1 = require("./Deadline/Deadline.service");
let AppController = class AppController {
    constructor(appService, subjectService, DeadlineService) {
        this.appService = appService;
        this.subjectService = subjectService;
        this.DeadlineService = DeadlineService;
    }
    root() {
        return {
            title: '😤🤟M33061😎😷️',
            logged: true,
            unlogged: false,
            user: 'гость',
        };
    }
    ais() {
        return {
            title: 'Архитектура информационных систем',
            logged: false,
            unlogged: true,
            user: '',
        };
    }
    web() {
        return {
            title: 'Web-программирование',
            logged: false,
            unlogged: true,
            user: '',
        };
    }
    philosophy() {
        return {
            title: 'Философия',
            logged: false,
            unlogged: true,
            user: '',
        };
    }
    practice() {
        return {
            title: 'Практика',
            logged: false,
            unlogged: true,
            user: '',
        };
    }
    telecom() {
        return {
            title: 'Телекоммуникационные системы и технологии',
            logged: false,
            unlogged: true,
            user: '',
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index.hbs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "root", null);
__decorate([
    (0, common_1.Get)('ais'),
    (0, common_1.Render)('ais.hbs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "ais", null);
__decorate([
    (0, common_1.Get)('web'),
    (0, common_1.Render)('web.hbs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "web", null);
__decorate([
    (0, common_1.Get)('philosophy'),
    (0, common_1.Render)('philosophy.hbs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "philosophy", null);
__decorate([
    (0, common_1.Get)('practice'),
    (0, common_1.Render)('practice.hbs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "practice", null);
__decorate([
    (0, common_1.Get)('telecom'),
    (0, common_1.Render)('telecom.hbs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "telecom", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        subject_service_1.SubjectService,
        Deadline_service_1.DeadlineService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map