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
const schema_ts_1 = require("schema-ts");
const type_graphql_1 = require("type-graphql");
const data_1 = require("../data");
let default_1 = class default_1 {
    products() {
        return data_1.products;
    }
};
__decorate([
    type_graphql_1.Query(returns => [schema_ts_1.Product]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], default_1.prototype, "products", null);
default_1 = __decorate([
    type_graphql_1.Resolver(of => schema_ts_1.Product)
], default_1);
exports.default = default_1;
//# sourceMappingURL=product-resolver.js.map