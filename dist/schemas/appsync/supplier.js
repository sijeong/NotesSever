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
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const mall_1 = require("./mall");
const AWSDateTime_1 = require("../../scalars/AWSDateTime");
const AWSPhone_1 = require("../../scalars/AWSPhone");
const helpers_1 = require("../../helpers");
let Supplier = class Supplier {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Supplier.prototype, "supplierId", void 0);
__decorate([
    type_graphql_1.Field(type => mall_1.Mall),
    typeorm_1.Column(),
    __metadata("design:type", mall_1.Mall)
], Supplier.prototype, "mall", void 0);
__decorate([
    helpers_1.RelationColumn(),
    __metadata("design:type", Number)
], Supplier.prototype, "mallId", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Supplier.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Supplier.prototype, "businessOwnerName", void 0);
__decorate([
    type_graphql_1.Field(type => AWSPhone_1.AWSPhone),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Supplier.prototype, "phone", void 0);
__decorate([
    type_graphql_1.Field(type => AWSDateTime_1.AWSDateTime),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Supplier.prototype, "createdAt", void 0);
Supplier = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], Supplier);
exports.Supplier = Supplier;
