var app = angular.module('schedulerModule');
app.controller('categoriesController',function ($scope,$http,$timeout,$routeParams) {
    $http.get('data/categories.json').success(function (data) {
        $scope.categories = data;
        console.log($scope.categories)
    });

    $scope.categoryButton = true;
    $scope.categotyForm = false;
    $scope.showCategoryForm = function () {
        $scope.categoryButton = false;
        $scope.categotyForm = true;
    }

    // add category

    $scope.addCategoty = function (categoryName) {
        $scope.categories.push({name:categoryName});
        console.log($scope.categories);
        $timeout(function () {
            $scope.categoryButton = true;
            $scope.categotyForm = false;
        },1500)
    }

    //delete Category

    $scope.deleteCategory = function (categoty) {
        var index = $scope.categories.indexOf(categoty);
        $scope.categories.splice(index, 1);
        $http.post('data/categories.json', $scope.categories);
        console.log($scope.categories);
    };

    //update Category

    $scope.activeCategory = null;

    $scope.editCategory = function (category) {
        $scope.activeCategory = category;
    };

    $scope.updateCategory = function () {
        $scope.activeCategory = null;
        $http.post('data/categories.json', $scope.categories);
        console.log($scope.categories);
    }
});
