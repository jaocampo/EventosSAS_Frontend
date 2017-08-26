'use strict';

describe('Component: CreateEquiposComponent', function () {

  // load the controller's module
  beforeEach(module('eventosSasApp'));

  var CreateEquiposComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CreateEquiposComponent = $componentController('create-equipos', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
