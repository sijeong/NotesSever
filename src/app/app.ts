import { ApolloServer } from 'apollo-server-koa';
import { GraphQLSchema } from 'graphql';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { buildSchema } from 'type-graphql';

import { TodoResolver } from '../resolvers/todo.resolver';
import graphqlController, { resolvers, typeDefs } from './graphql.controller';
import Container from 'typedi';
import { FileResolver } from '../resolvers/file.resolver';

export const schema: Promise<GraphQLSchema> = buildSchema({
    resolvers: [TodoResolver, FileResolver],
    container: Container,
    emitSchemaFile: {
        path: 'emited.graphql'
    }
})


// const apollo = new ApolloServer({
//     typeDefs, resolvers
// });

const app: Koa = new Koa();

app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
    try {
        await next();
    } catch (error) {
        const errorStatus = ctx.status;

        ctx.status = errorStatus;
        ctx.body = { error }
    }
})


// app.use(apollo.getMiddleware())
app.use(bodyParser);

app.use(graphqlController.routes());
app.use(graphqlController.allowedMethods());

app.on('error', console.error)

export default app;