// import { Product, Review, Price } from 'schema-ts'
import { Product } from '../schemas/appsync/product'
import { Resolver, Query, Arg, Mutation, FieldResolver, Root } from 'type-graphql'
import { products, reviews, prices, ProductData, ReviewData, PriceData } from '../data'
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';


@Resolver(of => Product)
export default class {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ) { }
    @Query(returns => [Product], { nullable: true })
    products(): ProductData[] {
        return products;
    }
    @FieldResolver()
    reviews(@Root() review: ReviewData) {
        return reviews.filter(r => {
            return r.product_id === review.product_id
        })
    }
    @FieldResolver()
    prices(@Root() price: PriceData) {
        return prices.find(p => p.product_id)
    }

}