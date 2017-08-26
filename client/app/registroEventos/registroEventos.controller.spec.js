'use strict';

describe('Component: RegistroEventosComponent', function () {

  // load the controller's module
  beforeEach(module('eventosSasApp'));

  var RegistroEventosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    RegistroEventosComponent = $componentController('RegistroEventosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
