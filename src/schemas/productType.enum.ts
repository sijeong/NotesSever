import { registerEnumType } from 'type-graphql'
import { Product } from 'schema-ts';

export enum ProductType{
    TypeOne,
    TypeTwo
}

registerEnumType(ProductType, {
    name: "ProductType",
    description: ""
})