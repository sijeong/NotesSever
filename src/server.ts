import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import Container from 'typedi';
import { useContainer } from 'typeorm';

import { schema } from './app/app';
import graphqlController, { resolvers, typeDefs } from './app/graphql.controller';
import databaseConnection from './database/database.connection';
import { seedDatabase } from './helpers';

const PORT: number = Number(process.env.PORT) || 4000;

// databaseConnection
//     .then(() => app.listen(PORT))
//     .catch(console.error)
// useContainer(Container);
databaseConnection.then(
    () => {
        schema.then((s) => {
            const server = new ApolloServer({
                schema: s
            });
            seedDatabase();
            
            const app: Koa = new Koa();

            app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
                try {
                    await next();
                } catch (error) {
                    const errorStatus = ctx.status;

                    ctx.status = errorStatus;
                    ctx.body = { error };
                    ctx.app.emit('error', error, ctx)
                }
            })

            app.use(server.getMiddleware())
            app.use(bodyParser);

            app.use(graphqlController.routes());
            app.use(graphqlController.allowedMethods());

            app.on('error', console.error)

            app.listen(PORT)
        });

    }
).catch(console.error)