"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recipe_1 = require("./schemas/recipe");
const user_1 = require("./schemas/user");
const rate_1 = require("./schemas/rate");
exports.connection = {
    type: "postgres",
    database: "nbb",
    username: "postgres",
    password: "jsi9200!",
    port: 5432,
    host: "localhost",
    entities: [recipe_1.Recipe, user_1.User, rate_1.Rate],
    synchronize: true,
    logger: "advanced-console",
    logging: "all",
    dropSchema: true,
    cache: true,
};
