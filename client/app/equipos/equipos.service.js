'use strict';
function equiposService(API,$resource){
  return $resource(API+'/equipos/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}

angular.module('eventosSasApp')
.factory('equiposService', equiposService);
