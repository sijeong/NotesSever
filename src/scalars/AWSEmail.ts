import { GraphQLScalarType, Kind, GraphQLError } from "graphql";

const regex: RegExp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);
export const AWSEmail = new GraphQLScalarType({
    name: "AWSEmail",
    description: "",

    serialize(value: string) {
        if (!regex.test(value)) {
            throw new TypeError(``);
        }

        return value;
    },

    parseValue(value) {
        if (!regex.test(value)) {
            throw new TypeError(``);
        }

        return value;
    },

    parseLiteral(ast) {
        if (ast.kind !== Kind.STRING) {
            throw new GraphQLError(
                ``
            )
        }
        if (!regex.test(ast.value)) {
            throw new TypeError(``)
        }

        return ast.value;
    }

})