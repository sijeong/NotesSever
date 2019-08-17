import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { Container } from "typedi";
import * as TypeORM from "typeorm";
import * as TypeGraphQL from 'type-graphql'
import { RecipeResolver } from "./resolvers/recipe.resolver";
import { RateResolver } from "./resolvers/rate.resolver";
import { Recipe } from "./schemas/recipe";
import { Rate } from "./schemas/rate";
import { User } from "./schemas/user";
import { seedDatabase } from "./helpers";
import { MallResolver } from "./resolvers/appsync/mall.resolver";
import { Mall } from "./schemas/appsync/mall";

export interface Context {
  user: User;
}

// register 3rd party IOC container
TypeORM.useContainer(Container);

async function bootstrap() {
  try {
    // create TypeORM connection
    await TypeORM.createConnection({
      type: "postgres",
      database: "nbb",
      username: "postgres", // fill this with your username
      password: "jsi9200!", // and password
      port: 5432,
      host: "localhost",
      entities: [Recipe, Rate, User, Mall],
      synchronize: true,
      // logger: "advanced-console",
      logging: false
      // dropSchema: true,
      // cache: true,
    });

    // seed database with some data
    const { defaultUser } = await seedDatabase();

    // build TypeGraphQL executable schema
    const schema = await TypeGraphQL.buildSchema({
      resolvers: [RecipeResolver, RateResolver, MallResolver],
      container: Container,
      emitSchemaFile: {
        path: 'emit.graphql'
      }
    });

    // create mocked context
    const context: Context = { user: defaultUser };

    // Create GraphQL server
    // const server = new ApolloServer({ schema, context });

    // Without context
    const server = new ApolloServer({ schema });
    // Start the server
    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
