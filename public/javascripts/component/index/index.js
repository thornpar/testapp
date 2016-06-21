angular.module('testModule').directive('index',function () {
    return {
        restrict: 'EA',
        scope: {
        },
        controller: 'testModule.indexController',
        templateUrl: 'javascripts/component/index/index.html'
    };
});


