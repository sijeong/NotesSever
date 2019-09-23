import Router from 'koa-router';

const routerOps: Router.IRouterOptions = {
    prefix: '/'
}

const router: Router = new Router(routerOps);

router.all('/', ctx => {
    ctx.redirect('/graphql');
    ctx.status = 301
})
export default router;