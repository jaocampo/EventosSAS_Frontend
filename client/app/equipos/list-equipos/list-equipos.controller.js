'use strict';

(function(){

class ListEquiposComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('equipos')
  .component('listEquipos', {
    templateUrl: 'app/equipos/list-equipos/list-equipos.html',
    controller: ListEquiposComponent,
    controllerAs: 'listEquiposCtrl'
  });

})();
