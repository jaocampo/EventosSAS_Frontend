'use strict';

describe('Component: UpdateEquiposComponent', function () {

  // load the controller's module
  beforeEach(module('eventosSasApp'));

  var UpdateEquiposComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    UpdateEquiposComponent = $componentController('update-equipos', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
