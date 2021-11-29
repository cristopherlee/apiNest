"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const app_module_1 = require("./app.module");
const winston_configs_1 = require("./configs/winston.configs");
async function bootstrap() {
    const logger = nest_winston_1.WinstonModule.createLogger(winston_configs_1.winstonConfig);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API RESTFUL')
        .setDescription('The API Users Documentation')
        .setVersion('0.0.1')
        .addTag('Users')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map