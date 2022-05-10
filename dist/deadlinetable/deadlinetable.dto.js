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
exports.DeadlineTableDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class DeadlineTableDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Title',
        example: 'Хостинг веб-приложения на сервисе Heroku',
    }),
    __metadata("design:type", String)
], DeadlineTableDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'MinScore',
        example: '5',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DeadlineTableDto.prototype, "minScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'maxScore',
        example: '15',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DeadlineTableDto.prototype, "maxScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Deadline',
        example: '5.05',
    }),
    __metadata("design:type", String)
], DeadlineTableDto.prototype, "deadline", void 0);
exports.DeadlineTableDto = DeadlineTableDto;
//# sourceMappingURL=deadlinetable.dto.js.map