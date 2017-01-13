var app = angular.module('schedulerModule');
app.controller('categoriesController',function ($scope,$http,$timeout,$routeParams) {
    $http.get('data/categories.json').success(function (data) {
        $scope.categories = data;
        console.log($scope.categories)
    });

    $scope.categoryButton = true;
    $scope.categotyForm = false;
    $scope.closeForma = false;


    $scope.showCategoryForm = function () {
        $scope.categoryButton = false;
        $scope.categotyForm = true;
        $scope.closeForma = true;
    };

    $scope.closeCategoryForm = function () {
        $scope.categoryButton = true;
        $scope.categotyForm = false;
        $scope.closeForma = false;
    };


    // add category

    $scope.addCategoty = function (categoryName) {
        $scope.categories.push({name:categoryName});
        console.log($scope.categories);
        $timeout(function () {
            $scope.categoryButton = true;
            $scope.categotyForm = false;
        },1500)
    };

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
    };

    $(document).ready(function() {

        $(window).resize(function(){
            var windowWidth = $(window).width();
            if(windowWidth < 555)$(".rename-button").addClass("restyle-button");
            else $(".rename-button").removeClass("restyle-button");
        });

        $(window).resize(function(){
            var Width = $(window).width();
            if(Width < 555)$(".rename-link").addClass("restyle-link");
            else $(".rename-link").removeClass("restyle-link");
        });

    });
});
