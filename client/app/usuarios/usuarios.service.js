'use strict';
function usuariosService(API,$resource){
  return $resource(API+'/usuarios/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    },
    findByNumDocumento:{
      method:'GET',
      url:API+'/usuarios/find'
    }
  })
}

angular.module('eventosSasApp')
.factory('usuariosService', usuariosService);
