// import { Product } from "schema-ts";
import { Product } from '../../schemas/appsync/product'
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';
import { Query } from 'type-graphql';
export class ProductResolver {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ) { }

    @Query(returns => [Product])
    products(): Promise<Product[]> {
        return this.productRepository.find();
    }
}