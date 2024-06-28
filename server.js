// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

const port = process.env.PORT || 3000;

server.use(middlewares)
server.use(jsonServer.bodyParser);



server.use(jsonServer.rewriter({
    '/*': '/$1',
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})
server.listen(port);

// Export the Server API
module.exports = server
