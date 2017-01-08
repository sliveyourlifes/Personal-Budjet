var app = angular.module('schedulerModule');
app.controller('addingPositionsController', function ($scope, $http, $routeParams,$timeout, $filter) {
    $http.get('data/' + $routeParams.name + '.json').success(function (data) {
        $scope.positions = data;
        console.log($scope.positions);
    })

    $scope.deletePosition = function (position) {
        var index = $scope.positions.indexOf(position);
        $scope.positions.splice(index, 1);
    };

    $scope.activePosition = null;

    $scope.editPosition = function (position) {
        $scope.activePosition = position;
    };

    $scope.updatePosition = function () {
        $scope.activePosition = null;
    };

    $scope.buttonPosition = true;
    $scope.formPosition = false;

    $scope.showFormPosition = function () {
        $scope.buttonPosition = false;
        $scope.formPosition = true;
    };


    $scope.addPosition = function (positionTitle,positionDescription,positionDate,positionMoney) {
        $scope.positions.push({title:positionTitle, description: positionDescription, date: positionDate, money: positionMoney});
        console.log($scope.positions);
        $scope.positionDate = null;
        $scope.positionMoney = null;
        $scope.positionTitle = null;
        $scope.positionDescription = null;
        $timeout(function () {
            $scope.buttonPosition = true;
            $scope.formPosition = false;
        },5000)
    }









});