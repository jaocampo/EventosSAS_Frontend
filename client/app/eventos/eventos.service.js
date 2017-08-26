'use strict';
function eventosService(API,$resource){
  return $resource(API+'/eventos/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    },
    findByCodigo:{
      method:'GET',
      url:API+'/eventos/find'
    }
  })
}

angular.module('eventosSasApp')
.factory('eventosService', eventosService);
