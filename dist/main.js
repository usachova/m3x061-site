"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const hbs = require("hbs");
const logging_interceptor_1 = require("./logging.interceptor");
const swagger_1 = require("@nestjs/swagger");
const subject_module_1 = require("./subject/subject.module");
const Deadline_module_1 = require("./Deadline/Deadline.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    hbs.registerPartials((0, path_1.join)(__dirname, '..', '/views/partials'));
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('m33061')
        .setDescription('m33061-site')
        .setVersion('1.0')
        .addTag('site')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {
        include: [subject_module_1.SubjectModule, Deadline_module_1.DeadlineModule],
    });
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const port = process.env.PORT || 4242;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map