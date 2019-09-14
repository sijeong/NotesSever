import { registerEnumType } from 'type-graphql'


export enum ProductType{
    TypeOne,
    TypeTwo
}

registerEnumType(ProductType, {
    name: "ProductType",
    description: ""
})