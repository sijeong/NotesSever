import { registerEnumType } from "type-graphql";

export enum TaxType {
    TAXABLE,
    NONTAXABLE
}

registerEnumType(TaxType, {
    name: "Tax Type",
    description: "tax types for purchase"
})