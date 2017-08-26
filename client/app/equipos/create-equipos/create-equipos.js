'use strict';

angular.module('eventosSasApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create-equipos', {
        url: '/create-equipos',
        template: '<create-equipos></create-equipos>'
      });
  });
