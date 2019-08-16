"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
var ProductType;
(function (ProductType) {
    ProductType[ProductType["TypeOne"] = 0] = "TypeOne";
    ProductType[ProductType["TypeTwo"] = 1] = "TypeTwo";
})(ProductType = exports.ProductType || (exports.ProductType = {}));
type_graphql_1.registerEnumType(ProductType, {
    name: "ProductType",
    description: ""
});
