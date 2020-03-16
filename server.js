require('./dbconnection');
const Hapi = require ('hapi');
const bplugin = require('./pulgin/baseRoute')
var Routes = require('./routes/userRoutes')
const auth = require('./pulgin/auth')
const Plugin = require('./pulgin/sawagger')

const init =async ()=>{

const server = new Hapi.Server({
    port:8000,
    host : 'localhost'
});
await server.route(Routes());


await server.register()


await server.start();

 console.log('sever started at 8000');
};
// process.on('unhandledRejection',(err)=>{
//     console.log(err);
//     process.exit(1);
// })

init();