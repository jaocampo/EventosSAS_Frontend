'use strict';

angular.module('eventosSasApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('eventos-create', {
        url: '/eventos-create',
        template: '<eventos-create></eventos-create>'
      });
  });
