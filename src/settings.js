const VIRTUAL_HOST = process.env.VIRTUAL_HOST
const VIRTUAL_PORT = process.env.VIRTUAL_PORT
var HOST

if (VIRTUAL_HOST && VIRTUAL_PORT) {
  HOST = process.env.VIRTUAL_HOST + ':' + process.env.VIRTUAL_PORT
} else {
  HOST = 'http://localhost:8080'
}

export default { HOST }