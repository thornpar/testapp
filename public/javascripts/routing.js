angular.module('testModule').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', config]);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/list");

    $stateProvider.state('list', {
        url : '/list',
        template: '<character-list></character-list>'
    }).state('details', {
        url : '/details/:characterName',
        template: '<character-details></character-details>'
    })
}