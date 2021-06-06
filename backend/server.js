const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('rules.json');
const middlewares = jsonServer.defaults();
const cors = require ('cors')

const port = process.env.PORT || 3000;


server.use(
    cors({
        origin:true,
        preflightContinue: false,
        methods:'GET,HEAD,PUT,PATCH,POST,DELETE'
    })
)
server.options('*', cors());


server.use(middlewares);
server.use(router);

server.listen(port);