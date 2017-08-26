'use strict';
(function(){

class RegistroEventosComponent {
  constructor(registroEventosService,usuariosService,eventosService) {
    this.registroEventosService = registroEventosService;
    this.usuariosService = usuariosService;
    this.eventosService = eventosService;
    this.numeroDocumento;
  }
  $onInit(){
    this.eventos = this.eventosService.query();
    console.log(this.eventos);
  }
  registarAsistencia(){
    this.registroEvento.asistio = false;
    this.usuariosService.findByNumDocumento({numDocumento:this.numeroDocumento}).$promise
    .then(response =>{
      this.registroEvento.usuariosId= response;
      this.registroEvento.asistio = false;
      this.registroEventosService.save(this.registroEvento).$promise
      .then(response =>{
        console.log('OK');
      })
      .catch(err =>{
        console.log(err);
      })
    })
    .catch(err =>{

    });
  }
}

angular.module('eventosSasApp')
  .component('registroEventos', {
    templateUrl: 'app/registroEventos/registroEventos.html',
    controller: RegistroEventosComponent,
    controllerAs:'vm'
  });

})();
