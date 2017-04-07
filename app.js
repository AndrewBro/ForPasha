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
<<<<<<< HEAD
            // views: {
            //     'more': {
            //         templateUrl: 'more.html',
            //         controller: function($scope){ button }
            //     },
            //     'contacts': {
            //         templateUrl: 'contacts.html',
            //         controller: function($scope){ button }
            //     },
            //     'address': {
            //         templateUrl: 'address.html',
            //         controller: function($scope){ button }
            //     }
            // }
=======
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
>>>>>>> 67e95847b7e73df897d4faa0f1a7da716a89a392
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

//
// var button = angular.module('button', ['ui.router']);
//
// button.config(function ($stateProvider, $urlRouterProvider) {
//
//     $stateProvider
//         .state('more', {
//             url: '/more',
//             view: {templateUrl: './pages/more.html'},
//             // templateUrl: './pages/more.html',
//             controller: 'moreCtrl'
//         })
//         .state('contacts', {
//             url: '/contacts',
//             view: {templateUrl: './pages/contacts.html'},
//             // templateUrl: './pages/contacts.html',
//             controller: 'contactsCtrl'
//         })
//         .state('address', {
//             url: '/address',
//             view: {templateUrl: './pages/address.html'},
//             // templateUrl: './pages/address.html',
//             controller: 'addressCtrl'
//         });
//
//     $urlRouterProvider.otherwise('/');
//
// });
//
// button.controller('moreCtrl', function ($scope) {
// });
// button.controller('contactsCtrl', function ($scope) {
// });
// button.controller('addressCtrl', function ($scope) {
// });


