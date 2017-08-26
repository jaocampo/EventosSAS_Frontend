'use strict';
(function(){

class EventosCreateComponent {
  constructor(eventosService) {
    this.eventosService = eventosService;
  }
  createEvento(){
    this.eventosService.save(this.evento).$promise
    .then(response =>{
      console.log('Evento creado exitosamente');
    })
    .catch(err =>{
      console.log('Error al crear el evento');
    })
  }
}

angular.module('eventosSasApp')
  .component('eventosCreate', {
    templateUrl: 'app/eventos/eventos-create/eventos-create.html',
    controller: EventosCreateComponent,
    controllerAs:'vm'
  });

})();
