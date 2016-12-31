var app = angular.module('schedulerModule');
app.directive('footerscheduler', function () {
    return {
        restrict: 'EA',
        templateUrl: 'views/footer.html',
        controller: function ($scope) {
            $scope.navHome = 'Home';
            $scope.navCategories = 'Categories';//
            $scope.navExpense = 'Expense'//
        }
    }
});
