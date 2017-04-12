
myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('first', {
            url: '/first',
            templateUrl: '../first/first.html',
            controller: 'firstCtrl'
        })
        .state('first.more', {
            url: '/more',
            views: {
                'childView': {
                    templateUrl: '../first/more.html'
                }
            }
        })
        .state('first.contacts', {
            url: '/contacts',
            views: {
                'childView': {
                    templateUrl: '../first/contacts.html'
                }
            }
        })
        .state('first.address', {
            url: '/address',
            views: {
                'childView': {
                    templateUrl: '../first/address.html'
                }
            }

        })
        .state('first.address.address_child', {
            url: '/address_child',
            views: {
                'address_child': {
                    templateUrl: '../first/address_child.html'
                }
            }

        });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

});

myApp.controller('firstCtrl', function ($scope) {
});

