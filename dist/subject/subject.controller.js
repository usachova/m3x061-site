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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const subject_service_1 = require("./subject.service");
const subject_dto_1 = require("./subject.dto");
let SubjectController = class SubjectController {
    constructor(subjectService) {
        this.subjectService = subjectService;
    }
    async getSubject() {
        const promise = this.subjectService.subjects({});
        return promise;
    }
    async post(subjectDTO) {
        const subj = { subject: subjectDTO.subject };
        const promise = await this.subjectService.createSubject(subj);
        return promise;
    }
    async delete(id) {
        const subj = await this.subjectService.subject({
            id: Number(id),
        });
        if (subj == null) {
            throw new common_1.HttpException('not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.subjectService.deleteSubject({ id: Number(id) });
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get all subjects',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'success',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'forbidden',
    }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "getSubject", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'add subject',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'success',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'forbidden',
    }),
    (0, common_1.Post)('post'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subject_dto_1.SubjectDto]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "post", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'delete subject',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'success',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'forbidden',
    }),
    (0, common_1.Delete)(':id/delete'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "delete", null);
SubjectController = __decorate([
    (0, swagger_1.ApiTags)('Subject'),
    (0, common_1.Controller)('subject'),
    __metadata("design:paramtypes", [subject_service_1.SubjectService])
], SubjectController);
exports.SubjectController = SubjectController;
//# sourceMappingURL=subject.controller.js.map