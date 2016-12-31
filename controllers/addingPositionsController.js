var app = angular.module('schedulerModule');
app.controller('addingPositionsController', function ($scope, $http, $routeParams, $filter) {
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










});