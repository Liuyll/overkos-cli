import { Overkos } from 'overkos'

const port = 3000
const overkos = new Overkos()
overkos.start(port)

console.log(`overkos listen on port:${port}`)
