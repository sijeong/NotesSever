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
const schema_ts_1 = require("schema-ts");
const type_graphql_1 = require("type-graphql");
const data_1 = require("../data");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const typeorm_1 = require("typeorm");
let default_1 = class default_1 {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    products() {
        return data_1.products;
    }
    reviews(review) {
        return data_1.reviews.filter(r => {
            return r.product_id === review.product_id;
        });
    }
    prices(price) {
        return data_1.prices.find(p => p.product_id);
    }
};
__decorate([
    type_graphql_1.Query(returns => [schema_ts_1.Product], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], default_1.prototype, "products", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], default_1.prototype, "reviews", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], default_1.prototype, "prices", null);
default_1 = __decorate([
    type_graphql_1.Resolver(of => schema_ts_1.Product),
    __param(0, typeorm_typedi_extensions_1.InjectRepository(schema_ts_1.Product)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], default_1);
exports.default = default_1;
