
myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider

        .state('third', {
            url: '/third?name',
            templateUrl: '../third/third.html',
            controller: 'thirdCtrl'
        });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

});

myApp.controller('thirdCtrl', thirdCtrl);

thirdCtrl.$inject = ['$scope', '$stateParams'];

function thirdCtrl($scope, $stateParams) {
    // $scope.name = $stateParams.name;
    // $scope.$watch('user.name', function(newV, old) {
    //     window.location = newV
    // })
}

