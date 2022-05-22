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
exports.SubjectDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SubjectDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name',
        example: 'WEB-программирование',
    }),
    __metadata("design:type", String)
], SubjectDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'GradeType',
        example: 'экзамен',
    }),
    __metadata("design:type", String)
], SubjectDto.prototype, "gradeType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'LecturerName',
        example: 'Роман',
    }),
    __metadata("design:type", String)
], SubjectDto.prototype, "lecturerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'LecturerLink',
        example: 'https://isu.ifmo.ru/pls/apex/f?p=2143:3:110250148663533::NO::PID:184321',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SubjectDto.prototype, "lecturerLink", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'PracticeName',
        example: 'Рома',
    }),
    __metadata("design:type", String)
], SubjectDto.prototype, "practiceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'PracticeLink',
        example: 'https://isu.ifmo.ru/pls/apex/f?p=2143:3:110250148663533::NO::PID:184321',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SubjectDto.prototype, "practiceLink", void 0);
exports.SubjectDto = SubjectDto;
//# sourceMappingURL=subject.dto.js.map