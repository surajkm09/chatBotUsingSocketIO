
const app  =require('./api/app') ;
const http = require('http');

const server = http.createServer(app);
const io = require('socket.io')(server);



io.on('connection',(socket)=>{
    console.log('A user Has connected !');

    socket.emit('welcome-message'," Hello user how do you do ");

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
server.listen(3334)