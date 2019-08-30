import { ConnectionOptions } from 'typeorm';
import { Recipe } from './schemas/recipe';
import { User } from './schemas/user';
import { Rate } from './schemas/rate';

export const connection: ConnectionOptions = {
    type: "postgres",
    database: "nbb",
    username: "postgres",
    password: "jsi9200!",
    port: 5432,
    host: "localhost",
    entities: [Recipe, User, Rate],
    synchronize: true,
    logger: "advanced-console",
    logging: "all",
    dropSchema: true,
    cache: true,
}