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
exports.DeadlinetableController = void 0;
const common_1 = require("@nestjs/common");
const deadlinetable_service_1 = require("./deadlinetable.service");
const swagger_1 = require("@nestjs/swagger");
const deadlinetable_dto_1 = require("./deadlinetable.dto");
let DeadlinetableController = class DeadlinetableController {
    constructor(deadlinetableService) {
        this.deadlinetableService = deadlinetableService;
    }
    async getDeadlineTable() {
        return this.deadlinetableService.deadlineTables({});
    }
    async post(deadlinetableDTO) {
        const dl = { subject: deadlinetableDTO.deadline };
        const promise = this.deadlinetableService.createDeadlineTable(dl);
        return promise;
    }
    async delete(id) {
        const subj = await this.deadlinetableService.DeadlineTable({
            id: Number(id),
        });
        if (subj == null) {
            throw new common_1.HttpException('not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.deadlinetableService.deleteDeadlineTable({ id: Number(id) });
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'get all deadlinetables',
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
], DeadlinetableController.prototype, "getDeadlineTable", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'add deadlinetable',
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
    __metadata("design:paramtypes", [deadlinetable_dto_1.DeadlineTableDto]),
    __metadata("design:returntype", Promise)
], DeadlinetableController.prototype, "post", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'delete deadlinetable',
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
], DeadlinetableController.prototype, "delete", null);
DeadlinetableController = __decorate([
    (0, swagger_1.ApiTags)('DeadlineTable'),
    (0, common_1.Controller)('deadlinetable'),
    __metadata("design:paramtypes", [deadlinetable_service_1.DeadlineTableService])
], DeadlinetableController);
exports.DeadlinetableController = DeadlinetableController;
//# sourceMappingURL=deadlinetable.controller.js.map