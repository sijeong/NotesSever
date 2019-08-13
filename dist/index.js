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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const typedi_1 = require("typedi");
const TypeORM = __importStar(require("typeorm"));
const type_graphql_1 = require("type-graphql");
// import { GraphQLServer } from "graphql-yoga";
const project_resolver_1 = __importDefault(require("./resolvers/project-resolver"));
const task_resolver_1 = __importDefault(require("./resolvers/task-resolver"));
const note_resolver_1 = __importDefault(require("./resolvers/note-resolver"));
const helper_1 = require("./helper");
TypeORM.useContainer(typedi_1.Container);
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield TypeORM.createConnection({
                type: "postgres",
                database: "type-graphql",
                username: "",
                password: "",
                port: 1111,
                host: "localhost",
                entities: [],
                synchronize: true,
                logger: "advanced-console",
                logging: "all",
                dropSchema: true,
                cache: true,
            });
            const { defaultVendor } = yield helper_1.seedDatabase();
            const schema = yield type_graphql_1.buildSchema({
                resolvers: [project_resolver_1.default, task_resolver_1.default, note_resolver_1.default],
                container: typedi_1.Container,
                emitSchemaFile: true,
            });
            const context = { vendor: defaultVendor };
            // const server = new GraphQLServer({
            //     schema,
            // });
            const server = new apollo_server_1.ApolloServer({ schema, context });
            const { url } = yield server.listen(4000);
            console.log(`Server is running, GraphQL Playground available at ${url}`);
            // server.start(() => console.log("Server is running on http://localhost:4000"));
        }
        catch (err) {
            console.error(err);
        }
    });
}
bootstrap();
//# sourceMappingURL=index.js.map