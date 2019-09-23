import { registerEnumType } from "type-graphql";

export enum TodoTypes{
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

registerEnumType(TodoTypes, {
    name: "",
    description: ""
})