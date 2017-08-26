'use strict';

describe('Component: ListEquiposComponent', function () {

  // load the controller's module
  beforeEach(module('equipos'));

  var ListEquiposComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ListEquiposComponent = $componentController('list-equipos', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
