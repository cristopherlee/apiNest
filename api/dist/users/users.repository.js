"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const common_1 = require("@nestjs/common");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async createUser(createUserDto) {
        const { email, name } = createUserDto;
        let userValid = false;
        let errorMsg = '';
        if (!email) {
            userValid = false;
            errorMsg = 'Email vazio.';
        }
        else if (!name) {
            userValid = false;
            errorMsg = 'O nome é Obrigatório.';
        }
        else {
            userValid = true;
        }
        if (userValid) {
            const user = this.create();
            user.email = email;
            user.name = name;
            try {
                await user.save();
                return user;
            }
            catch (error) {
                if (error.code.toString() === '23505') {
                    throw new common_1.ConflictException('Endereço de email já está em uso');
                }
                else {
                    throw new common_1.InternalServerErrorException('Erro ao salvar o usuário no banco de dados');
                }
            }
        }
        else {
            throw new common_1.ConflictException(errorMsg);
        }
    }
    async findUsers() {
        const users = this.find();
        return users;
    }
};
UserRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=users.repository.js.map