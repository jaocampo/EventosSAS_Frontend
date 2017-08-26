'use strict';

(function(){

class UpdateEquiposComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('eventosSasApp')
  .component('updateEquipos', {
    templateUrl: 'app/equipos/update-equipos/update-equipos.html',
    controller: UpdateEquiposComponent,
    controllerAs: 'updateEquiposCtrl'
  });

})();
