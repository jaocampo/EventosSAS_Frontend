'use strict';

describe('Service: registroEventos', function () {

  // load the service's module
  beforeEach(module('eventosSasApp'));

  // instantiate service
  var registroEventos;
  beforeEach(inject(function (_registroEventos_) {
    registroEventos = _registroEventos_;
  }));

  it('should do something', function () {
    expect(!!registroEventos).to.be.true;
  });

});
