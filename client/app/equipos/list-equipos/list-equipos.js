'use strict';

angular.module('equipos')
  .config(function ($stateProvider) {
    $stateProvider
      .state('list-equipos', {
        url: '/list-equipos',
        template: '<list-equipos></list-equipos>'
      });
  });
