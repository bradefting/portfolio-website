(function() {
  'use strict';

  angular.module('app')
    .config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider){

      $locationProvider.html5Mode(true);

      $stateProvider
        .state({
          name: 'app',
          abstract: true,
          component: 'app'
        })
        .state({
          name: 'home',
          url: '/',
          parent: 'app',
          component: 'home'
        })
        .state({
          name: 'project',
          url: '/:id/project',
          parent: 'app',
          component: 'projectItem'
        })
        .state({
          name: 'experience',
          url: '/:id/project',
          parent: 'app',
          component: 'experienceItem'
        })
    }

}());
