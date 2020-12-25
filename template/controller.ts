import { GET, Controller, Inject, Middleware, Params} from 'overkos'
import HelloService from '../../service/helloService'

@Controller('')
class HelloController {
    @Inject("clsContext")
    public clsContext

    @Middleware((ctx,next) => {
        console.log('middleware')
        next()
    })
    @GET('test/:id')
    match(ctx, next, @Inject() dep: HelloService, @Params('id') id) {
        ctx.body = `hello gay: your id is ${id}, your value is ${dep.get()}`
        next()
    }
}

export default HelloController


