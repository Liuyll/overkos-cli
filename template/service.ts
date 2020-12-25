import { Inject, Service} from 'overkos'

@Service()
class HelloService {
    get() {
        return 'overkos'
    }
}

export default HelloService
