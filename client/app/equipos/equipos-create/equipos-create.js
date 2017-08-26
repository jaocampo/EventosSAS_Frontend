'use strict';

angular.module('eventosSasApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('equipos-create', {
        url: '/equipos-create',
        template: '<equipos-create></equipos-create>'
      });
  });
