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
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const rate_1 = require("../schemas/rate");
const user_1 = require("../schemas/user");
let RateResolver = class RateResolver {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async user(rate) {
        return (await this.userRepository.findOne((await rate.user).id, { cache: 1000 }));
    }
};
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rate_1.Rate]),
    __metadata("design:returntype", Promise)
], RateResolver.prototype, "user", null);
RateResolver = __decorate([
    type_graphql_1.Resolver(of => rate_1.Rate),
    __param(0, typeorm_typedi_extensions_1.InjectRepository(user_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RateResolver);
exports.RateResolver = RateResolver;
