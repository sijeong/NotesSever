"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// import { ApolloServer } from "apollo-server";
const typedi_1 = require("typedi");
const TypeORM = __importStar(require("typeorm"));
const TypeGraphQL = __importStar(require("type-graphql"));
const helpers_1 = require("./helpers");
const connection_1 = require("./connection");
const recipe_resolver_1 = require("./resolvers/recipe.resolver");
const rate_resolver_1 = require("./resolvers/rate.resolver");
const todo_resolver_1 = require("./resolvers/todo.resolver");
// register 3rd party IOC container
TypeORM.useContainer(typedi_1.Container);
async function bootstrap() {
    try {
        await TypeORM.createConnection(connection_1.connection);
        // seed database with some data
        const { defaultUser } = await helpers_1.seedDatabase();
        // build TypeGraphQL executable schema
        const schema = await TypeGraphQL.buildSchema({
            resolvers: [recipe_resolver_1.RecipeResolver, rate_resolver_1.RateResolver, todo_resolver_1.TodoResolver],
            container: typedi_1.Container,
            emitSchemaFile: {
                path: 'emit.graphql'
            }
        });
        // create mocked context
        const context = { user: defaultUser };
        // Create GraphQL server
        // const server = new ApolloServer({ schema, context });
        // Without context
        //   const server = new ApolloServer({ schema, context });
        //   Start the server
        //   const { url } = await server.listen(4000);
        //   console.log(`Server is running, GraphQL Playground available at ${url}`);
        // } catch (err) {
        //   console.error(err);
        // }
    }
    finally { }
}
