'use strict';
(function(){

class EquiposCreateComponent {
  constructor(equiposService) {
    this.equiposService = equiposService;
    this.equipo = {
      equipo:null,
      usuariosId:null
    }
  }
  registrarEquipo(){
    console.log(this.equipo);
    this.equiposService.save(this.equipo).$promise
    .then(response =>{
      console.log('Evento creado exitosamente');
    })
    .catch(err =>{
      console.log('Error al crear el evento');
    })
  }
}

angular.module('eventosSasApp')
  .component('equiposCreate', {
    templateUrl: 'app/equipos/equipos-create/equipos-create.html',
    controller: EquiposCreateComponent,
    controllerAs:'vm'
  });

})();
