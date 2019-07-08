var app = angular.module("mainApp",[]);


app.config(function($routeProvider,$locationProvider){

    $routeProvider.when('/',{
        templateUrl:'./views/main.html',
        controller:'maincontroller'
    });
    $locationProvider.html5Mode(true);


});
app.controller('maincontroller',function(){
    var socket = io.connect('http://localhost:3334');
    var id = LoopBackAuth.accessTokenId;
    var userId = LoopBackAuth.currentUserId;
    socket.on('connect', function(){
        socket.emit('authentication', {id: id, userId: userId });
        socket.on('authenticated', function() {
            // use the socket as usual
            console.log('User is authenticated');
        });
    });
});