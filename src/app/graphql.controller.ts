import Router from 'koa-router'
import { gql } from 'apollo-server-koa'

const routerOps: Router.IRouterOptions = {
    prefix: '/graphql'
}

export const typeDefs = gql`
    type Query {
        hello: String
    }
`;

export const resolvers = {
    Query: {
        hello: () => 'Hello world'
    }
}

const router: Router = new Router(routerOps);

export default router;