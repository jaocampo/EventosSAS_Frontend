'use strict';
(function(){

class UsuariosCreateComponent {
  constructor(usuariosService) {
    this.usuariosService = usuariosService;
  }
  createUser(){
    console.log(this.usuario);
    this.usuariosService.save(this.usuario).$promise
    .then(response =>{
      console.log('Usuario creado exitosamente');
    })
    .catch(err =>{
      console.log('Error al crear el usuario');
    })
  }
}

angular.module('eventosSasApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs:'vm'
  });

})();
