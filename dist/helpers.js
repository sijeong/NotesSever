"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const todo_entities_1 = require("./schemas/todo.entities");
// import { Mall } from "./schemas/appsync/mall";
// import { Supplier } from "./schemas/appsync/supplier";
// import { Product } from "./schemas/appsync/product";
// import { TaxType } from "./schemas/appsync/taxType.enum";
async function seedDatabase() {
    // const recipeRepository = getRepository(Recipe);
    // const ratingsRepository = getRepository(Rate);
    // const userRepository = getRepository(User);
    const todoRepository = typeorm_1.getRepository(todo_entities_1.Todo);
    // const mallRepository = getRepository(Mall);
    // const supplierRepository = getRepository(Supplier);
    // const productRepository = getRepository(Product);
    // const defaultUser = userRepository.create({
    //   email: "test@github.com",
    //   nickname: "19majkel94",
    //   password: "s3cr3tp4ssw0rd",
    // });
    // await userRepository.save(defaultUser);
    const todos = todoRepository.create([
        {
            text: "todo one",
            completed: false
        },
        {
            text: "todo two",
            completed: false
        }
    ]);
    await todoRepository.save(todos);
    // const [recipe1, recipe2] = recipeRepository.create([
    //   {
    //     title: "Recipe 1",
    //     description: "Desc 1",
    //     author: defaultUser,
    //   },
    //   {
    //     title: "Recipe 2",
    //     author: defaultUser,
    //   },
    // ]);
    // await recipeRepository.save([recipe1, recipe2]);
    // const ratings = ratingsRepository.create([
    //   { value: 2, user: defaultUser, recipe: recipe1 },
    //   { value: 4, user: defaultUser, recipe: recipe1 },
    //   { value: 5, user: defaultUser, recipe: recipe1 },
    //   { value: 3, user: defaultUser, recipe: recipe1 },
    //   { value: 4, user: defaultUser, recipe: recipe1 },
    //   { value: 2, user: defaultUser, recipe: recipe2 },
    //   { value: 4, user: defaultUser, recipe: recipe2 },
    // ]);
    // await ratingsRepository.save(ratings);
    // const defaultMall = mallRepository.create({
    //   mallName: "Our First Mall",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // })
    // await mallRepository.save(defaultMall);
    // const defaultSupplier = supplierRepository.create({
    // })
    // const products = productRepository.create({
    //   mall: defaultMall,
    //   // supplier: defaultSupplier,
    //   price:{
    //     openMarketPrice: 1000,
    //     purchasePrice: 1000,
    //     memberPrice: 1000
    //   },
    //   taxType: TaxType.TAXABLE,
    //   createdAt: new Date(),
    //   updateAt: new Date()
    // })
    // return {
    //   defaultUser,
    // };
}
exports.seedDatabase = seedDatabase;
function RelationColumn(options) {
    return typeorm_1.Column(Object.assign({ nullable: true }, options));
}
exports.RelationColumn = RelationColumn;
