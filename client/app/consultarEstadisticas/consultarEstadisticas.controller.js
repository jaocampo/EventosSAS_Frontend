'use strict';
(function(){

class ConsultarEstadisticasComponent {
  constructor(registroEventosService) {
    this.registroEventosService = registroEventosService;
    this.codigoEventoAConsultar = "1234";
    this.listaAsistentes = [];
    this.listaAsistentesRegistrados;
    this.listaAsistentesAsistieron = 0;
    this.contador = 0;
  }
  $onInit(){
    this.registroEventosService.query().$promise
    .then(response =>{
      this.listaEventos = response;
      //console.log(this.listaEventos[0].eventosId.codigo == '1234');
    })
    .catch(err =>{

    })

  }
  consultarEstadisticas(){
    for(var i=0; i < this.listaEventos.length; i++){
      if(this.listaEventos[i].eventosId.codigo == this.codigoEventoAConsultar){
        this.listaAsistentes[this.contador] = this.listaEventos[i];
        this.contador++;
      }
    }
    console.log('se registraron',this.listaAsistentes.length);
    this.listaAsistentesRegistrados = this.listaAsistentes.length;
    for(var i=0; i < this.listaAsistentes.length; i++){
      if(this.listaAsistentes[i].asistio == true){
        this.listaAsistentesAsistieron++;
      }
    }

    console.log('asistieron',this.listaAsistentesAsistieron);

    console.log('Porcentaje asistencia '+ this.listaAsistentesAsistieron * 100 / this.listaAsistentes.length+'%');
  }
}

angular.module('eventosSasApp')
  .component('consultarEstadisticas', {
    templateUrl: 'app/consultarEstadisticas/consultarEstadisticas.html',
    controller: ConsultarEstadisticasComponent,
    controllerAs:'vm'
  });

})();
