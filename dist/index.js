"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const typedi_1 = require("typedi");
const TypeORM = __importStar(require("typeorm"));
const TypeGraphQL = __importStar(require("type-graphql"));
const recipe_resolver_1 = require("./resolvers/recipe.resolver");
const rate_resolver_1 = require("./resolvers/rate.resolver");
const recipe_1 = require("./schemas/recipe");
const rate_1 = require("./schemas/rate");
const user_1 = require("./schemas/user");
const helpers_1 = require("./helpers");
const mall_resolver_1 = require("./resolvers/appsync/mall.resolver");
const mall_1 = require("./schemas/appsync/mall");
// register 3rd party IOC container
TypeORM.useContainer(typedi_1.Container);
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // create TypeORM connection
            yield TypeORM.createConnection({
                type: "postgres",
                database: "nbb",
                username: "postgres",
                password: "jsi9200!",
                port: 5432,
                host: "localhost",
                entities: [recipe_1.Recipe, rate_1.Rate, user_1.User, mall_1.Mall],
                synchronize: true,
                // logger: "advanced-console",
                logging: false
                // dropSchema: true,
                // cache: true,
            });
            // seed database with some data
            const { defaultUser } = yield helpers_1.seedDatabase();
            // build TypeGraphQL executable schema
            const schema = yield TypeGraphQL.buildSchema({
                resolvers: [recipe_resolver_1.RecipeResolver, rate_resolver_1.RateResolver, mall_resolver_1.MallResolver],
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
            const server = new apollo_server_1.ApolloServer({ schema });
            // Start the server
            const { url } = yield server.listen(4000);
            console.log(`Server is running, GraphQL Playground available at ${url}`);
        }
        catch (err) {
            console.error(err);
        }
    });
}
bootstrap();
