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
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const supplier_1 = require("./supplier");
const productPrice_1 = require("./productPrice");
const taxType_enum_1 = require("./taxType.enum");
const AWSDateTime_1 = require("../../scalars/AWSDateTime");
let Product = class Product {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Product.prototype, "productId", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Product.prototype, "productName", void 0);
__decorate([
    type_graphql_1.Field(type => supplier_1.Supplier)
    // @ManyToMany(type => Supplier)
    // supplier: Supplier;
    ,
    type_graphql_1.Field(type => productPrice_1.ProductPrice),
    typeorm_1.Column(type => productPrice_1.ProductPrice),
    __metadata("design:type", productPrice_1.ProductPrice)
], Product.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(type => taxType_enum_1.TaxType),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Product.prototype, "taxType", void 0);
__decorate([
    type_graphql_1.Field(type => AWSDateTime_1.AWSDateTime),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(type => AWSDateTime_1.AWSDateTime),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Product.prototype, "updateAt", void 0);
Product = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], Product);
exports.Product = Product;
