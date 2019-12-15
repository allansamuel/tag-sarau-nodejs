const Koa = require('koa')
const app = new Koa()
const { listarGratuitos } = require('../04-mongodb/listarGratuitos')

app.use(async ctx => {
        const { localidade } = ctx.request.query
            /* ctx.body = { msg: 'hello World' } */
        ctx.body = await listarGratuitos()
    }) //ctx=context

app.listen(3000) // 80 | 443