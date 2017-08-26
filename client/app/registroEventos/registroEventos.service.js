
  'use strict';
  function registroEventosService(API,$resource){
    return $resource(API+'/usuarios-has-eventos/:id',{
      id:'@id'
    },{
      update:{
        method:'PUT'
      }
    });
  }

  angular.module('eventosSasApp')
  .factory('registroEventosService', registroEventosService);
