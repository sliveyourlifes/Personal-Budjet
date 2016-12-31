var app = angular.module('schedulerModule');
app.directive('navigation', function () {
    return {
        restrict: 'EA',
        templateUrl: 'views/navigation.html',
        controller: function ($scope) {
            $scope.navHome = 'Home';
            $scope.navCategories = 'Categories';//
            $scope.navExpense = 'Expense'//
        }
    }
});



