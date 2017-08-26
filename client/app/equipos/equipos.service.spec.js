'use strict';

describe('Service: equipos', function () {

  // load the service's module
  beforeEach(module('eventosSasApp'));

  // instantiate service
  var equipos;
  beforeEach(inject(function (_equipos_) {
    equipos = _equipos_;
  }));

  it('should do something', function () {
    expect(!!equipos).to.be.true;
  });

});
