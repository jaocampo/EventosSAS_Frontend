'use strict';

angular.module('eventosSasApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('update-equipos', {
        url: '/update-equipos',
        template: '<update-equipos></update-equipos>'
      });
  });
