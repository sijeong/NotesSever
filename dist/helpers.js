"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const recipe_1 = require("./schemas/recipe");
const rate_1 = require("./schemas/rate");
const user_1 = require("./schemas/user");
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const recipeRepository = typeorm_1.getRepository(recipe_1.Recipe);
        const ratingsRepository = typeorm_1.getRepository(rate_1.Rate);
        const userRepository = typeorm_1.getRepository(user_1.User);
        const defaultUser = userRepository.create({
            email: "test@github.com",
            nickname: "19majkel94",
            password: "s3cr3tp4ssw0rd",
        });
        yield userRepository.save(defaultUser);
        const recipes = recipeRepository.create([
            {
                title: "Recipe 1",
                description: "Desc 1",
                author: defaultUser,
                ratings: ratingsRepository.create([
                    { value: 2, user: defaultUser },
                    { value: 4, user: defaultUser },
                    { value: 5, user: defaultUser },
                    { value: 3, user: defaultUser },
                    { value: 4, user: defaultUser },
                ]),
            },
            {
                title: "Recipe 2",
                author: defaultUser,
                ratings: ratingsRepository.create([
                    { value: 2, user: defaultUser },
                    { value: 4, user: defaultUser },
                ]),
            },
        ]);
        yield recipeRepository.save(recipes);
        return {
            defaultUser,
        };
    });
}
exports.seedDatabase = seedDatabase;
function RelationColumn(options) {
    return typeorm_1.Column(Object.assign({ nullable: true }, options));
}
exports.RelationColumn = RelationColumn;
