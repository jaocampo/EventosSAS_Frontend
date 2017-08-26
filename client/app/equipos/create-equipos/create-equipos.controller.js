'use strict';

(function(){

class CreateEquiposComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('eventosSasApp')
  .component('createEquipos', {
    templateUrl: 'app/equipos/create-equipos/create-equipos.html',
    controller: CreateEquiposComponent,
    controllerAs: 'createEquiposCtrl'
  });

})();
