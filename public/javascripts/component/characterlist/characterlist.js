angular.module('testModule').directive('characterList',function () {
    return {
        restrict: 'EA',
        controller: 'testModule.characterListController',
        templateUrl: 'javascripts/component/characterlist/characterlist.html'
    };
});


