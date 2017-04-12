var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './pages/main.html',
            controller: 'mainCtrl'
        })
        .state('first', {
            url: '/first',
            templateUrl: './pages/first.html',
            controller: 'firstCtrl'
        })
        .state('first.more', {
            url: '/more',
            views: {
                'childView': {
                    templateUrl: './pages/more.html'
                }
            }
        })
        .state('first.contacts', {
            url: '/contacts',
            views: {
                'childView': {
                    templateUrl: './pages/contacts.html'
                }
            }
        })
        .state('first.address', {
            url: '/address',
            views: {
                'childView': {
                    templateUrl: './pages/address.html'
                }
            }

        })
        .state('first.address.address_child', {
            url: '/address_child',
            views: {
                'address_child': {
                    templateUrl: './pages/address_child.html'
                }
            }

        })
        .state('second', {
            url: '/second',
            templateUrl: './pages/second.html',
            controller: 'secondCtrl'
        })
        .state('third', {
            url: '/third?name',
            templateUrl: './pages/third.html',
            controller: 'thirdCtrl'
        })
        .state('fourth', {
            url: '/fourth',
            templateUrl: './pages/fourth.html',
            controller: 'fourthCtrl'
        });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

});

myApp.controller('mainCtrl', function ($scope) {
});
myApp.controller('firstCtrl', function ($scope) {
});
myApp.controller('secondCtrl', function ($scope) {
});
myApp.controller('thirdCtrl', thirdCtrl);

thirdCtrl.$inject = ['$scope', '$stateParams'];

function thirdCtrl($scope, $stateParams) {
    $scope.name = $stateParams.name;
    $scope.$watch('user.name', function(newV, old) {
        window.location = newV
    })
}

myApp.controller('fourthCtrl', function ($scope) {
});

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './pages/main.html',
            controller: 'mainCtrl'
        })
        .state('first', {
            url: '/first',
            templateUrl: './pages/first.html',
            controller: 'firstCtrl'
        })
        .state('first.more', {
            url: '/more',
            views: {
                'childView': {
                    templateUrl: './pages/more.html'
                }
            }
        })
        .state('first.contacts', {
            url: '/contacts',
            views: {
                'childView': {
                    templateUrl: './pages/contacts.html'
                }
            }
        })
        .state('first.address', {
            url: '/address',
            views: {
                'childView': {
                    templateUrl: './pages/address.html'
                }
            }
        })
        .state('second', {
            url: '/second',
            templateUrl: './pages/second.html',
            controller: 'secondCtrl'
        })
        .state('third', {
            url: '/third',
            templateUrl: './pages/third.html',
            controller: 'thirdCtrl'
        })
        .state('fourth', {
            url: '/fourth',
            templateUrl: './pages/fourth.html',
            controller: 'fourthCtrl'
        });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

});

myApp.controller('mainCtrl', function ($scope) {
});
myApp.controller('firstCtrl', function ($scope) {
});
myApp.controller('secondCtrl', function ($scope) {
});
myApp.controller('thirdCtrl', function ($scope) {
});
myApp.controller('fourthCtrl', function ($scope) {
});