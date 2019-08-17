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
const mall_1 = require("../../schemas/appsync/mall");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const typeorm_1 = require("typeorm");
let MallResolver = class MallResolver {
    constructor(mallRepository) {
        this.mallRepository = mallRepository;
    }
    malls() {
        return this.mallRepository.find();
    }
};
__decorate([
    type_graphql_1.Query(returns => [mall_1.Mall]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MallResolver.prototype, "malls", null);
MallResolver = __decorate([
    type_graphql_1.Resolver(of => mall_1.Mall),
    __param(0, typeorm_typedi_extensions_1.InjectRepository(mall_1.Mall)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MallResolver);
exports.MallResolver = MallResolver;
