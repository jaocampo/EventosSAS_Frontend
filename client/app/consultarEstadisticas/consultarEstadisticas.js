'use strict';

angular.module('eventosSasApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('consultarEstadisticas', {
        url: '/consultarEstadisticas',
        template: '<consultar-estadisticas></consultar-estadisticas>'
      });
  });
