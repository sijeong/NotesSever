"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.AWSDateTime = new graphql_1.GraphQLScalarType({
    name: "AWSDateTime",
    description: "...can be used for appsync scalar...",
    parseValue(value) {
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) {
            throw new TypeError(`Value is not a valid Date: ${value}`);
        }
        return date;
    },
    parseLiteral(ast) {
        if (ast.kind !== graphql_1.Kind.STRING && ast.kind !== graphql_1.Kind.INT) {
            throw new graphql_1.GraphQLError(`Cn only parse string & intergers to dates but got a: ${ast.kind}`);
        }
    },
    serialize(value) {
        let v = value;
        if (!(v instanceof Date) && typeof v !== 'string' && typeof v !== 'number') {
            throw new TypeError(`Value is not an instance of Date, Date string or number: ${JSON.stringify(v)}`);
        }
        if (typeof v === 'string') {
            v = new Date();
            v.setTime(Date.parse(value));
        }
        else if (typeof v === 'number') {
            v = new Date(v);
        }
        if (Number.isNaN(v.getTime())) {
            throw new TypeError(`Value is not a valid Date: ${JSON.stringify(v)}`);
        }
        return v.toJSON();
    }
});
