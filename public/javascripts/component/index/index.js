angular.module('testModule').directive('indexTest',function () {
    return {
        restrict: 'EA',
        scope: {
        },
        controller: function ($scope) {
            $scope.hello = 'asdf';
        },
        templateUrl: 'javascripts/component/index/index.html'
    };
});


