'use strict';
function usuariosService(API,$resource){
  return $resource(API+'/usuarios/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}

angular.module('eventosSasApp')
.factory('usuariosService', usuariosService);
