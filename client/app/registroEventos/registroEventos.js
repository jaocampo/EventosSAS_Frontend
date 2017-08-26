'use strict';

angular.module('eventosSasApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('registroEventos', {
        url: '/registroEventos',
        template: '<registro-eventos></registro-eventos>'
      });
  });
