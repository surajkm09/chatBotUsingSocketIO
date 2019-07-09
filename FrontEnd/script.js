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
    socket.on('welcome-message', function(data) {
        
        console.log(data);
    });
    });
