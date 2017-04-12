
myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider

        .state('fourth', {
            url: '/fourth',
            templateUrl: '../fourth/fourth.html',
            controller: 'fourthCtrl'
        });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

});

myApp.controller('fourthCtrl', function ($scope) {
});

