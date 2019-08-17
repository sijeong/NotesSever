import { GraphQLScalarType, Kind, GraphQLError } from 'graphql';

export const AWSDateTime = new GraphQLScalarType({
    name: "AWSDateTime",
    description: "...can be used for appsync scalar...",
    parseValue(value) {
        const date = new Date(value);

        if (Number.isNaN(date.getTime())) {
            throw new TypeError(`Value is not a valid Date: ${value}`)
        }

        return date;
    },
    parseLiteral(ast) {
        if (ast.kind !== Kind.STRING && ast.kind !== Kind.INT) {
            throw new GraphQLError(
                `Cn only parse string & intergers to dates but got a: ${ast.kind}`
            )
        }
    },
    serialize(value) {
        let v = value;

        if (!(v instanceof Date) && typeof v !== 'string' && typeof v !== 'number') {
            throw new TypeError(
                `Value is not an instance of Date, Date string or number: ${JSON.stringify(v)}`
            );
        }

        if (typeof v === 'string') {
            v = new Date();
            v.setTime(Date.parse(value));
        } else if (typeof v === 'number') {
            v = new Date(v);
        }

        if (Number.isNaN(v.getTime())) {
            throw new TypeError(`Value is not a valid Date: ${JSON.stringify(v)}`)
        }

        return v.toJSON();
    }
});

