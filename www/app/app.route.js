(function () {
    'use strict';

    angular
        .module('lembretesApp')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {

         $stateProvider

        .state('lembretes', {
            url: '/lembretes',
            templateUrl: 'views/lembretes/index.html',
            controller: 'lembretesController',
            controllerAs: 'vm'
        })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/lembretes');
    };

})();