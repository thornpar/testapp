angular.module('testModule').controller('testModule.characterDetailsController',[
    '$scope',
    '$state',
    'testModule.characterListService',
    indexController]);

function indexController($scope, $state, characterListService) {
    var ui = {
        character : {}
    };
    ui.character = characterListService.getCharacterByName($state.params.characterName);
    $scope.ui = ui;
}