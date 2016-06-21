angular.module('testModule').directive('characterDetails',function () {
    return {
        restrict: 'EA',
        controller: 'testModule.characterDetailsController',
        templateUrl: 'javascripts/component/characterdetails/characterdetails.html'
    };
});


