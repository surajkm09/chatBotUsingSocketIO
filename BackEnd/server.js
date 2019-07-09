
const app  =require('./api/app') ;
const http = require('http');

const server = http.createServer(app);
const io = require('socket.io')(server);



io.on('connection',(socket)=>{
    console.log('-----------------------socket--------------------------------');
    console.log(socket);
    
    console.log('-----------------------socket--------------------------------');
    console.log('-----------------------socket--------------------------------');
    console.log(socket.handshake.query);
    
    console.log('-----------------------socket--------------------------------');
    
    console.log('A user Has connected !');
    
    console.log(socket.connected);
    

    socket.emit('welcome-message'," Hello user how do you do ");

    socket.on('disconnect',()=>{
        console.log('The user has disconnected ! ')
    })
    socket.on('authenticationDetails',(data)=>{
        console.log('authentication details received ');
        console.log(data);
        
    })
    socket.disconnect();
});
server.on('listening',()=>{
    console.log('the server has started ');
});

server.on('error',(error)=>{
    console.log('an error has occurred !');
    console.log(error);
});
server.listen(3334)