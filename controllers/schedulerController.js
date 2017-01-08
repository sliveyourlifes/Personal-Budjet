
var app = angular.module('schedulerModule');
app.controller('schedulerController', function ($scope, $http, $filter, $timeout) {
    $http.get('data/budjet.json').success(function (data) {
        $scope.budjets = data.planningBudjet;
        console.log($scope.budjets);
    });

    $scope.buttonPlanning = true;
    $scope.formPlanning = false;
    // show formPlanning & hide buttonPlaning
    $scope.showFormPlanning = function () {
        $scope.buttonPlanning = false;
        $scope.formPlanning = true;
    };

    //form function

    $scope.addingMoney = '';
    $scope.addingDate = '';

    $scope.planningBudjet = function () {
       /* console.log('money:' + ' ' + $scope.addingMoney);
        console.log('array money:' + ' ' + $scope.budjets.planningMoney);
*/
        $scope.budjets.planningMoney.push(parseInt($scope.addingMoney));
       /* console.log('array with adding money:' + ' ' + $scope.budjets.planningMoney);*/
        $scope.addingMoney = null;
        /*console.log($scope.addingMoney);*/
        $scope.budjets.sumOfPlanningMoney = $scope.budjets.planningMoney.reduce(function (sum, elem) {
            return sum + elem;
        });
      /*  console.log('summ of money:' + ' ' + $scope.budjets.sumOfPlanningMoney);
        console.log('date value:' + ' ' + $scope.addingDate);
        console.log('array date:' + ' ' + $scope.budjets.planningDate);*/
        var day = $filter('date')($scope.addingDate, 'mediumDate');
        /*console.log('filter date:' + ' ' + day);*/
        $scope.budjets.planningDate.push(day);
        $scope.addingDate = null;
       /* console.log('array date with adding date:' + ' ' + $scope.budjets.planningDate);
        console.log($scope.budjets);
        console.log($scope.budjets.planningMoney);
        console.log($scope.budjets.planningDate);
        console.log($scope.budjets.sumOfPlanningMoney);*/

        function hideForm() {
            $scope.buttonPlanning = true;
            $scope.formPlanning = false;
        }

        function message() {
            alert('You have added your money!!! \n \n And now, go to the categories to schedule them!')
        }
        $timeout(hideForm, 1500);
        $timeout(message,5000)

    };


});
