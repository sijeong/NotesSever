import { Resolver, Query } from 'type-graphql'
import { Mall } from '../../schemas/appsync/mall';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';


@Resolver(of => Mall)
export class MallResolver {
    constructor(
        @InjectRepository(Mall) private readonly mallRepository: Repository<Mall>
    ) { }

    @Query(returns => [Mall])
    malls(): Promise<Mall[]> {
        return this.mallRepository.find();
    }
}