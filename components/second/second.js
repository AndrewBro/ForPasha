
myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider

        .state('second', {
            url: '/second',
            templateUrl: '../second/second.html',
            controller: 'secondCtrl'
        });


    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

});

myApp.controller('secondCtrl', function ($scope) {
});

