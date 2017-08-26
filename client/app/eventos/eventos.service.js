'use strict';
function eventosService(API,$resource){
  return $resource(API+'/eventos/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}

angular.module('eventosSasApp')
.factory('eventosService', eventosService);
