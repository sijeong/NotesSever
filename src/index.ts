import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { Container } from "typedi";
import * as TypeORM from "typeorm";
import { buildSchema } from "type-graphql";
// import { GraphQLServer } from "graphql-yoga";
import projectResolver from "./resolvers/project-resolver";
import taskResolver from "./resolvers/task-resolver";
import noteResolver from "./resolvers/note-resolver";
// import productResolver from "./resolvers/product-resolver";
// import { nonInputTypeOnVarMessage } from "graphql/validation/rules/VariablesAreInputTypes";
import { Vendor } from "./schemas/vendor";
import { seedDatabase } from "./helper";


export interface Context {
    vendor: Vendor;
}

TypeORM.useContainer(Container);


async function bootstrap() {
    try {
        await TypeORM.createConnection({
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

        const { defaultVendor } = await seedDatabase();






        const schema = await buildSchema({
            resolvers: [projectResolver, taskResolver, noteResolver],
            container: Container,
            emitSchemaFile: true,
        });

        const context: Context = { vendor: defaultVendor };

        // const server = new GraphQLServer({
        //     schema,
        // });

        const server = new ApolloServer({ schema, context });

        const { url } = await server.listen(4000);

        console.log(`Server is running, GraphQL Playground available at ${url}`);
        // server.start(() => console.log("Server is running on http://localhost:4000"));

    } catch (err) {
        console.error(err);
    }
}

bootstrap();