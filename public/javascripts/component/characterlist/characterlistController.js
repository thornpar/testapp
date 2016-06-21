angular.module('testModule').controller('testModule.characterListController',[
    '$scope',
    'testModule.characterListService',
     indexController]);

function indexController($scope, characterListService) {
    $scope.characters = characterListService.getCharacterList();
}