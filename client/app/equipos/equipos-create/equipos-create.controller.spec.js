'use strict';

describe('Component: EquiposCreateComponent', function () {

  // load the controller's module
  beforeEach(module('eventosSasApp'));

  var EquiposCreateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    EquiposCreateComponent = $componentController('EquiposCreateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
