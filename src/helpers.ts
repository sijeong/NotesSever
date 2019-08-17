import { getRepository, Column, ColumnOptions } from "typeorm";

import { Recipe } from "./schemas/recipe";
import { Rate } from "./schemas/rate";
import { User } from "./schemas/user";
import { Mall } from "./schemas/appsync/mall";

export async function seedDatabase() {
  const recipeRepository = getRepository(Recipe);
  const ratingsRepository = getRepository(Rate);
  const userRepository = getRepository(User);
  const mallRepository = getRepository(Mall);

  const defaultUser = userRepository.create({
    email: "test@github.com",
    nickname: "19majkel94",
    password: "s3cr3tp4ssw0rd",
  });
  await userRepository.save(defaultUser);

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

  await recipeRepository.save(recipes);

  const malls = mallRepository.create({
    mallName: "Our First Mall",
    createdAt: new Date(),
    updatedAt: new Date()
  })

  await mallRepository.save(malls);
  
  return {
    defaultUser,
  };
}

export function RelationColumn(options?: ColumnOptions) {
  return Column({ nullable: true, ...options });
}
