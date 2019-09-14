import 'reflect-metadata';

import { join } from 'path';
import { ConnectionOptions, Connection, createConnection, useContainer } from 'typeorm';
import { TodoResolver } from '../resolvers/todo.resolver';
import { Todo } from '../schemas/todo.entities';
import Container from 'typedi';

const parentDir = join(__dirname, '..');
useContainer(Container);
const connectionOpts: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'jsi9200!',
    database: process.env.DB_NAME || 'nbb',
    entities: [
        // `${parentDir}/**/*.entity.ts`,
        Todo
    ],
    dropSchema: true,
    synchronize: true,
};

const connection: Promise<Connection> = createConnection(connectionOpts)

export default connection;