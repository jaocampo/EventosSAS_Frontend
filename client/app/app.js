'use strict';

angular.module('eventosSasApp', ['eventosSasApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ui.router', 'ui.bootstrap'
  ])
  .constant('API','http://localhost:8080/eventos/api')
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
