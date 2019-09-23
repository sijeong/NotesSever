import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import mount from 'koa-mount';
import Router from 'koa-router';
import serve from 'koa-static';
import Container from 'typedi';
import { useContainer } from 'typeorm';

import { schema } from './app/app';
import defaultController from './app/default.controller';
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
        console.log('db OK')
        schema.then((s) => {
            console.log('schema generated')
            seedDatabase();

            const server = new ApolloServer({
                schema: s,
                uploads: {
                    maxFileSize: 100_000,
                    maxFiles: 5
                }
            });

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
            app.use(bodyParser());

            app.use(defaultController.routes());
            app.use(defaultController.allowedMethods());

            app.use(graphqlController.routes());
            app.use(graphqlController.allowedMethods());

            app.use(serve('./uploads'));
            app.use(mount('/uploads', app))
            
            app.on('error', console.error)

            app.listen(PORT)

            console.log('now server listen on 4000/graphql')
        });
    }
).catch(console.error)