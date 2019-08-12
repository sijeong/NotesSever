import {Product} from 'schema-ts'

import {Resolver, Query, Arg, Mutation} from 'type-graphql'
import {products} from '../data'

@Resolver(of => Product)
export default class {
    @Query(returns => [Product])
    products(): Product[]{
        return products;
    }
}