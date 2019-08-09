import "reflect-metadata";

import { buildSchema } from "type-graphql";
import { GraphQLServer } from "graphql-yoga";
import projectResolver from "./resolvers/project-resolver";
import taskResolver from "./resolvers/task-resolver";
import noteResolver from "./resolvers/note-resolver";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [projectResolver, taskResolver, noteResolver],
        emitSchemaFile: true,
    });

    const server = new GraphQLServer({
        schema,
    });

    server.start(() => console.log("Server is running on http://localhost:4000"));
}

bootstrap();