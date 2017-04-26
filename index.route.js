(function () {
    'use strict';

    angular
        .module('grt')
        .config(routerConfig);


    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('start', {
                url: '',
                abstract: true,
                views: {
                    'main': {
                        templateUrl: 'pages/start.html'
                    }
                }
            })
            .state('start.home', {
                url: '/',
                parent: 'start',
                views: {
                    'content@start': {
                        templateUrl: 'pages/main/main.html',
                        controller: 'MainController as vm'
                    }
                }
            })
            .state('start.home.detail', {
                url: 'photo/:id',
                parent: 'start.home',
                views: {
                    'content@start':{
                        templateUrl: 'pages/detail/detail.html',
                        controller: 'DetailController as vm'
                    }
                },
                params: {
                    id: null
                }
            });

        $urlRouterProvider.otherwise('/');
    }


})();