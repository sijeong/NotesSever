import { registerEnumType } from "type-graphql";

export enum ProductStatus {
    DISCONTINUED,
    ONSALE
}

registerEnumType(ProductStatus, {
    name: "",
    description: ""
})