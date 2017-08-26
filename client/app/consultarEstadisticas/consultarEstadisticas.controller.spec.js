'use strict';

describe('Component: ConsultarEstadisticasComponent', function () {

  // load the controller's module
  beforeEach(module('eventosSasApp'));

  var ConsultarEstadisticasComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ConsultarEstadisticasComponent = $componentController('ConsultarEstadisticasComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
