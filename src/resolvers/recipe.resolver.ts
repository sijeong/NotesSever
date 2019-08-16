import { Resolver, Arg, Int, Query, Mutation, Ctx, FieldResolver, Root } from "type-graphql";
import { Recipe } from "../schemas/recipe";
import { InjectRepository } from "typeorm-typedi-extensions";
import { User } from "../schemas/user";
import { Repository } from "typeorm";
import { Rate } from "../schemas/rate";
import { RecipeInput } from "./types/recipe.input";
import { Context } from "vm";
import { RateInput } from "./types/rate.input";

@Resolver(of => Recipe)
export class RecipeResolver {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Recipe) private readonly recipeRepository: Repository<Recipe>,
        @InjectRepository(Rate) private readonly ratingsRepository: Repository<Rate>
    ) { }

    @Query(returns => Recipe, { nullable: true })
    recipe(@Arg("recipeId", type => Int) recipeId: number) {
        return this.recipeRepository.findOne(recipeId);
    }

    @Query(returns => [Recipe])
    recipes(): Promise<Recipe[]> {
        return this.recipeRepository.find();
    }

    @Mutation(returns => Recipe)
    async addRecipe(
        @Arg("recipe") RecipeInput: RecipeInput,
        @Ctx() { user }: Context
    ): Promise<Recipe> {
        const recipe = this.recipeRepository.create({
            ...RecipeInput,
            authorId: user.id,
        });

        return await this.recipeRepository.save(recipe);
    }

    @Mutation(returns => Recipe)
    async rate(@Arg("rate") rateInput: RateInput, @Ctx() { user }: Context): Promise<Recipe> {
        const recipe = await this.recipeRepository.findOne(rateInput.recipeId, { relations: ["ratings"] });

        if (!recipe) {
            throw new Error("Invalid recipe ID");
        }

        const newRate = this.ratingsRepository.create({
            recipe,
            value: rateInput.value,
            user,
        });

        recipe.ratings.push(newRate);

        await this.recipeRepository.save(recipe);

        return recipe;
    }

    @FieldResolver()
    ratings(@Root() recipe: Recipe) {
        return this.ratingsRepository.find({
            cache: 1000,
            where: { recipeId: recipe.id }
        });
    }

    @FieldResolver()
    async author(@Root() recipe: Recipe): Promise<User> {
        return (await this.userRepository.findOne(recipe.authorId, { cache: 1000 }))!;
    }

}