var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondCtrl'
        })
});

myApp.controller('mainCtrl', function($scope){

});

myApp.controller('secondCtrl', function($scope){

});