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
exports.DeadlineController = void 0;
const common_1 = require("@nestjs/common");
const Deadline_service_1 = require("./Deadline.service");
const swagger_1 = require("@nestjs/swagger");
const Deadline_dto_1 = require("./Deadline.dto");
let DeadlineController = class DeadlineController {
    constructor(DeadlineService) {
        this.DeadlineService = DeadlineService;
    }
    async getDeadline() {
        return this.DeadlineService.Deadlines({});
    }
    async post(DeadlineDTO) {
        const dl = { subject: DeadlineDTO.deadline };
        const promise = this.DeadlineService.createDeadline(dl);
        return promise;
    }
    async delete(id) {
        const subj = await this.DeadlineService.Deadline({
            id: Number(id),
        });
        if (subj == null) {
            throw new common_1.HttpException('not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.DeadlineService.deleteDeadline({ id: Number(id) });
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get all Deadlines',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
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
], DeadlineController.prototype, "getDeadline", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'add Deadline',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'success',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'forbidden',
    }),
    (0, common_1.Post)('post'),
    (0, common_1.Post)('post'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Deadline_dto_1.DeadlineDto]),
    __metadata("design:returntype", Promise)
], DeadlineController.prototype, "post", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'delete Deadline',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'success',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'forbidden',
    }),
    (0, common_1.Delete)(':id/delete'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DeadlineController.prototype, "delete", null);
DeadlineController = __decorate([
    (0, swagger_1.ApiTags)('Deadline'),
    (0, common_1.Controller)('Deadline'),
    __metadata("design:paramtypes", [Deadline_service_1.DeadlineService])
], DeadlineController);
exports.DeadlineController = DeadlineController;
//# sourceMappingURL=Deadline.controller.js.map