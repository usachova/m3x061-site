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
exports.SubjectService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
let SubjectService = class SubjectService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async subject(SubjectWhereUniqueInput) {
        return this.prisma.subject.findUnique({
            where: SubjectWhereUniqueInput,
        });
    }
    async subjects(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.subject.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createSubject(data) {
        return this.prisma.subject.create({
            data,
        });
    }
    async updateSubject(params) {
        const { where, data } = params;
        return this.prisma.subject.update({
            data,
            where,
        });
    }
    async deleteSubject(where) {
        return this.prisma.subject.delete({
            where,
        });
    }
};
SubjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubjectService);
exports.SubjectService = SubjectService;
//# sourceMappingURL=subject.service.js.map