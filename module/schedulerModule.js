

angular.module('schedulerModule', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/schedulerOfBudjet.html',
            controller: 'schedulerController'
        }).when('/categories', {
            templateUrl: 'views/categories.html',
            controller: 'categoriesController'
        }).when('/categories/:name',{
            templateUrl:'views/addingPosition.html',
            controller: 'addingPositionsController'
        }).when('/expense', {
            templateUrl: 'views/expense.html',
            controller: 'expenseController'
        }).otherwise({
            redirectTo: '/'
        });
    }]);

