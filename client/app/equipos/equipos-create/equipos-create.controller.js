'use strict';
(function(){

class EquiposCreateComponent {
  constructor(equiposService,usuariosService,eventosService) {
    this.equiposService = equiposService;
    this.usuariosService = usuariosService;
    this.eventosService = eventosService;
    this.numDocumento = null;
    this.equipoNombre = null;
    this.criterio = null;
    this.codigo = null;
    this.eventosHasEquipos = {

    };
    this.mostrarCampo = false;
    this.opciones = {
      documento:{
        valor:1,
        nombre:'Usuario'
      },
      evento:{
        valor:2,
        nombre:'Evento'
      }
    }
    this.equipo = {
    }
  }
  seleccionarTipoUsuario(){
    this.mostrarCampo = true;
  }
  registrarEquipo(){
    this.equipo = {
      equipo:this.equipoNombre
    };
    console.log(this.criterio);
    if(this.tipoUsuario == 1){
      this.usuariosService.findByNumDocumento({numDocumento:this.criterio}).$promise
      .then(response =>{
        console.log('Este es el usuario',response);
        this.equipo.usuariosId = response;
        this.equiposService.save(this.equipo).$promise
        .then(response =>{
          console.log('OK');
        })
        .catch(err =>{
          console.log(this.equipo);
        })
      })
      .catch(err =>{
      });
}else{
  this.eventosService.findByCodigo({codigo:this.criterio}).$promise
  .then(response =>{
    this.equipo.eventosList = [response];
    console.log(this.equipo);
    this.equiposService.save(this.equipo).$promise
    .then(response =>{
      console.log('OK');
    })
    .catch(err =>{
      console.log('Error');
    })
  })
  .catch(err =>{
    console.log(err);
  })
}

  }
  $onInit(){
    /*this.usuariosService.findByNumDocumento({numDocumento:'asdfs'}).$promise
    .then(response =>{
      console.log('usuario encontrado',response);
    })
    .catch(err =>{
      console.log(err);
    })

    this.eventosService.findByCodigo({codigo:'1234'}).$promise
    .then(response =>{
      console.log('evento encontrado',response);
    })
    .catch(err =>{
      console.log(err);
    })*/
  }
}

angular.module('eventosSasApp')
  .component('equiposCreate', {
    templateUrl: 'app/equipos/equipos-create/equipos-create.html',
    controller: EquiposCreateComponent,
    controllerAs:'vm'
  });

})();
