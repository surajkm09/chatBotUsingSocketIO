const http = require('http');
const io = require('socket.io')(http);
const app  =require('./api/app') ;



const server = http.createServer(app);




io.on('connection',(socket)=>{
    console.log('A user Has connected !');

    socket.on('disconnect',()=>{
        console.log('The user has disconnected ! ')
    })
});
server.on('listening',()=>{
    console.log('the server has started ');
});

server.on('error',(error)=>{
    console.log('an error has occurred !');
    console.log(error);
});

server.listen(3334);